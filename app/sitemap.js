import { getBlogs } from "@/app/api/blog";
import { getOperations } from "@/app/api/operations";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://www.almunifi.com";
  const currentDate = new Date().toISOString().split("T")[0];

  // 1. الصفحات الثابتة
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/blogs",
    "/types-of-operations",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. صفحات العمليات مع الروابط البديلة (Alternates)
  let operationPages = [];
  try {
    const rawOperations = await getOperations();
    const operationsArray = Array.isArray(rawOperations) ? rawOperations : [];

    operationPages = operationsArray.map((op) => {
      // تشفير الروابط
      const englishSlug = encodeURI(op.slug || "");
      const arabicSlug = encodeURI(op.slug_ar || "");

      const englishUrl = `${baseUrl}/operation-details/${englishSlug}`;
      const arabicUrl = `${baseUrl}/operation-details/${arabicSlug}`;

      return {
        url: arabicUrl, // جعلنا الرابط الافتراضي هو العربي (يمكنك تغييره للإنجليزية إذا أردت)
        lastModified: new Date(op.updated_at || op.created_at || new Date())
          .toISOString()
          .split("T")[0],
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: {
          languages: {
            ar: arabicUrl,
            en: englishUrl,
          },
        },
      };
    });
  } catch (error) {
    console.error("Error fetching operations for sitemap:", error);
  }

  // 3. صفحات المقالات مع الروابط البديلة (Alternates)
  let blogPages = [];
  try {
    const rawBlogs = await getBlogs();
    const blogsArray = Array.isArray(rawBlogs) ? rawBlogs : [];

    blogPages = blogsArray.map((blog) => {
      // تشفير الروابط
      const englishSlug = encodeURI(blog.slug || "");
      const arabicSlug = encodeURI(blog.slug_ar || "");

      const englishUrl = `${baseUrl}/blogs/${englishSlug}`;
      const arabicUrl = `${baseUrl}/blogs/${arabicSlug}`;

      return {
        url: arabicUrl, // الرابط الافتراضي
        lastModified: new Date(blog.updated_at || blog.created_at || new Date())
          .toISOString()
          .split("T")[0],
        changeFrequency: "weekly",
        priority: 0.7,
        alternates: {
          languages: {
            ar: arabicUrl,
            en: englishUrl,
          },
        },
      };
    });
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  return [...staticPages, ...operationPages, ...blogPages];
}
