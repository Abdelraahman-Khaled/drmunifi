export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/cdn-cgi/", "/assets/", "/api/"],
    },
    sitemap: "https://www.almunifi.com/sitemap.xml",
  };
}
