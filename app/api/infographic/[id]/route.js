/**
 * Serves the infographic images from protected-assets/ (outside public/).
 *
 * The original PDFs are never exposed. This route only answers requests that a
 * browser makes while rendering our own page, so the images cannot be
 * hotlinked, indexed, or fetched directly by pasting the URL / using curl.
 */
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ASSET_DIR = path.join(process.cwd(), "protected-assets", "infographics");
const VALID_ID = /^[0-9A-Za-z_-]{1,32}$/;

function deny() {
  // Deliberately vague: don't confirm whether the asset exists.
  return new NextResponse("Not found", {
    status: 404,
    headers: { "Cache-Control": "no-store" },
  });
}

/**
 * Allow only same-origin sub-resource loads (an <img> on our own page).
 *
 * Sec-Fetch-* is sent by every current browser and cannot be set by page
 * script, so it is a much stronger signal than Referer alone. Referer is
 * used as the fallback for the few browsers that omit Sec-Fetch-*.
 */
function isAllowed(request) {
  const site = request.headers.get("sec-fetch-site");
  const dest = request.headers.get("sec-fetch-dest");

  if (site) {
    // Block hotlinking (cross-site) and address-bar navigation ("none").
    if (site !== "same-origin") return false;
    // Block "open image in new tab" / direct navigation to the URL.
    if (dest && dest !== "image" && dest !== "empty") return false;
    return true;
  }

  const referer = request.headers.get("referer");
  if (!referer) return false;
  try {
    return new URL(referer).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export async function GET(request, { params }) {
  if (!isAllowed(request)) return deny();

  const { id } = await params;
  if (!VALID_ID.test(id)) return deny();

  const filePath = path.join(ASSET_DIR, `${id}.webp`);
  // Defence in depth against path traversal.
  if (path.relative(ASSET_DIR, filePath).startsWith("..")) return deny();

  let info;
  try {
    info = await stat(filePath);
    if (!info.isFile()) return deny();
  } catch {
    return deny();
  }

  const stream = Readable.toWeb(createReadStream(filePath));

  return new NextResponse(stream, {
    status: 200,
    headers: {
      "Content-Type": "image/webp",
      "Content-Length": String(info.size),
      // Always render in place; never offer a "Save as" dialog.
      "Content-Disposition": "inline",
      // Keep it out of Google Images and any shared/CDN cache.
      "X-Robots-Tag": "noindex, noimageindex, nofollow, noarchive",
      "Cache-Control": "private, no-store, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
