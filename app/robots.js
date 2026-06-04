export default function robots() {
  return {
    rules: {
      userAgent: "*",
      // Allow the favicon + render-critical assets (CSS/JS) so Google can
      // fetch the icon and correctly render the page. Longest-match wins,
      // so these override the broader /assets/ disallow below.
      allow: ["/", "/assets/img/favicon.svg", "/assets/css/", "/assets/js/"],
      disallow: ["/admin", "/cdn-cgi/", "/api/", "/assets/"],
    },
    sitemap: "https://almunifi.com/sitemap.xml",
  };
}
