export default function robots() {
  return {
    rules: {
      userAgent: "*",
      // Allow images (favicon + everything in the image-sitemap) and
      // render-critical assets (CSS/JS) so Google can fetch the icon,
      // index images, and correctly render pages. Longest-match wins,
      // so these override the broader /assets/ disallow below.
      allow: ["/", "/assets/img/", "/assets/css/", "/assets/js/"],
      disallow: ["/admin", "/cdn-cgi/", "/api/", "/assets/"],
    },
    sitemap: [
      "https://almunifi.com/sitemap.xml",
      "https://almunifi.com/image-sitemap.xml",
    ],
  };
}
