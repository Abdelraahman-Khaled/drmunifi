import { getBlogs } from "./api/blog";
import { getOperations } from "./api/operations";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://almunifi.com";
  const currentDate = new Date().toISOString().split("T")[0];
  const locales = ["ar", "en"];

  // 1. الصفحات الثابتة
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/blogs",
    "/types-of-operations",
  ];

  const staticPages = [];
  staticRoutes.forEach((route) => {
    const arUrl = `${baseUrl}/ar${route}`;
    const enUrl = `${baseUrl}/en${route}`;

    // Add Arabic version
    staticPages.push({
      url: arUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    });

    // Add English version
    staticPages.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    });
  });

  // 2. صفحات العمليات
  let operationPages = [];
  try {
    const rawOperations = await getOperations();
    const operationsArray = Array.isArray(rawOperations) ? rawOperations : [];

    operationsArray.forEach((op) => {
      const englishSlug = encodeURI(op.slug || "");
      const arabicSlug = encodeURI(op.slug_ar || "");

      const englishUrl = `${baseUrl}/en/operation-details/${englishSlug}`;
      const arabicUrl = `${baseUrl}/ar/operation-details/${arabicSlug}`;
      const lastMod = new Date(op.updated_at || op.created_at || new Date())
        .toISOString()
        .split("T")[0];

      // Arabic entry
      operationPages.push({
        url: arabicUrl,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.7,
      });

      // English entry
      operationPages.push({
        url: englishUrl,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error("Error fetching operations for sitemap:", error);
  }

  // 3. صفحات المقالات
  let blogPages = [];
  try {
    const rawBlogs = await getBlogs();
    const blogsArray = Array.isArray(rawBlogs) ? rawBlogs : [];

    blogsArray.forEach((blog) => {
      const englishSlug = encodeURI(blog.slug || "");
      const arabicSlug = encodeURI(blog.slug_ar || "");

      const englishUrl = `${baseUrl}/en/blogs/${englishSlug}`;
      const arabicUrl = `${baseUrl}/ar/blogs/${arabicSlug}`;
      const lastMod = new Date(blog.updated_at || blog.created_at || new Date())
        .toISOString()
        .split("T")[0];

      // Arabic entry
      blogPages.push({
        url: arabicUrl,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.7,
      });

      // English entry
      blogPages.push({
        url: englishUrl,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  return [...staticPages, ...operationPages, ...blogPages];
}
