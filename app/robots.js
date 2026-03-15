export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/cdn-cgi/", "/assets/", "/api/"],
    },
    sitemap: "https://almunifi.com/sitemap.xml",
  };
}
