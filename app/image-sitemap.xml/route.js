import { getBlogs } from "../api/blog";
import { getOperations } from "../api/operations";

export const dynamic = "force-dynamic";

const baseUrl = "https://almunifi.com";
const locales = ["ar", "en"];

// Images present on every localized page: brand logo, favicon, and the
// language-switch flag (the navbar shows the *other* locale's flag).
const commonImages = (lang) => [
  `${baseUrl}/assets/img/favicon.svg`,
  `${baseUrl}/assets/img/logo.png`,
  lang === "ar"
    ? `${baseUrl}/assets/img/united-states.png`
    : `${baseUrl}/assets/img/saudi-arabia.png`,
];

// Extra page-specific images for the static routes (file names under /assets/img).
const staticRouteImages = {
  "": ["about-img1.webp", "find-out.webp", "improve.webp", "our-work.webp"],
  "/about": ["about-img1.webp", "signature.webp", "approach.webp"],
  "/types-of-operations": [],
  "/blogs": [],
  "/contact": ["bg-map.png"],
};

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlBlock(loc, images) {
  const unique = [...new Set(images.filter(Boolean))];
  const imageTags = unique
    .map(
      (img) =>
        `    <image:image>\n      <image:loc>${xmlEscape(img)}</image:loc>\n    </image:image>`
    )
    .join("\n");
  return `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n${imageTags}\n  </url>`;
}

// Collect gallery images for a blog/operation, falling back to the cover image.
function entryImages(item) {
  const photos = (item.photos || []).map((p) => p?.url).filter(Boolean);
  if (photos.length) return photos;
  const fallback = item.photo_url || item.image;
  return fallback ? [fallback] : [];
}

export async function GET() {
  const blocks = [];

  // 1. Static pages (Arabic + English)
  const staticRoutes = ["", "/about", "/types-of-operations", "/blogs", "/contact"];
  for (const lang of locales) {
    for (const route of staticRoutes) {
      const extra = (staticRouteImages[route] || []).map(
        (file) => `${baseUrl}/assets/img/${file}`
      );
      blocks.push(
        urlBlock(`${baseUrl}/${lang}${route}`, [...commonImages(lang), ...extra])
      );
    }
  }

  // 2. Operation detail pages
  try {
    const rawOperations = await getOperations();
    (Array.isArray(rawOperations) ? rawOperations : []).forEach((op) => {
      const opImages = entryImages(op);
      for (const lang of locales) {
        const slug = lang === "ar" ? op.slug_ar || op.slug : op.slug || op.slug_ar;
        if (!slug) continue;
        blocks.push(
          urlBlock(`${baseUrl}/${lang}/operation-details/${encodeURI(slug)}`, [
            ...commonImages(lang),
            ...opImages,
          ])
        );
      }
    });
  } catch (error) {
    console.error("Error fetching operations for image-sitemap:", error);
  }

  // 3. Blog detail pages
  try {
    const rawBlogs = await getBlogs();
    (Array.isArray(rawBlogs) ? rawBlogs : []).forEach((blog) => {
      const blogImages = entryImages(blog);
      for (const lang of locales) {
        const slug =
          lang === "ar" ? blog.slug_ar || blog.slug : blog.slug || blog.slug_ar;
        if (!slug) continue;
        blocks.push(
          urlBlock(`${baseUrl}/${lang}/blogs/${encodeURI(slug)}`, [
            ...commonImages(lang),
            ...blogImages,
          ])
        );
      }
    });
  } catch (error) {
    console.error("Error fetching blogs for image-sitemap:", error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${blocks.join(
    "\n"
  )}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
