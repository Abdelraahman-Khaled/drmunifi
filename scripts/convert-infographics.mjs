/**
 * Renders each infographic PDF to WebP images so the site never has to serve
 * the original PDF file. Output goes to protected-assets/ (outside public/),
 * and is served only through /api/infographic.
 *
 * Usage: node scripts/convert-infographics.mjs
 */
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pdf } from "pdf-to-img";
import sharp from "sharp";

const SRC_DIR = path.join(process.cwd(), "protected-assets", "infographic-src");
const OUT_DIR = path.join(process.cwd(), "protected-assets", "infographics");

// Render at 2x so the lightbox stays sharp on retina screens.
const SCALE = 4;
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter((f) => f.toLowerCase().endsWith(".pdf")).sort();
  if (!files.length) {
    console.error(`No PDFs found in ${SRC_DIR}`);
    process.exit(1);
  }

  const manifest = {};

  for (const file of files) {
    const id = path.basename(file, path.extname(file));
    const document = await pdf(path.join(SRC_DIR, file), { scale: SCALE });
    const pages = [];

    let pageNum = 0;
    for await (const image of document) {
      pageNum += 1;
      const name = document.length === 1 ? `${id}.webp` : `${id}-p${pageNum}.webp`;

      const out = await sharp(image)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toBuffer();

      const { width, height } = await sharp(out).metadata();
      await writeFile(path.join(OUT_DIR, name), out);

      pages.push({ file: name, width, height });
      console.log(`${file} p${pageNum} -> ${name} (${width}x${height}, ${(out.length / 1024).toFixed(0)} KB)`);
    }

    manifest[id] = pages;
  }

  await writeFile(path.join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`\nWrote manifest for ${Object.keys(manifest).length} infographics.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
