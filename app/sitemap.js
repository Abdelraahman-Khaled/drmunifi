import { getBlogs } from '@/app/api/blog';
import { getOperations } from '@/app/api/operations';

export default async function sitemap() {
    const baseUrl = 'https://dralmunifi.com';

    // Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/blogs',
        '/types-of-operations',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Fetch Dynamic Data
    let blogs = [];
    let operations = [];

    try {
        blogs = await getBlogs();
    } catch (error) {
        console.error('Sitemap: Failed to fetch blogs', error);
    }

    try {
        operations = await getOperations();
    } catch (error) {
        console.error('Sitemap: Failed to fetch operations', error);
    }

    // Dynamic Blog Routes
    const blogRoutes = Array.isArray(blogs)
        ? blogs.map((blog) => ({
            url: `${baseUrl}/blogs/${blog.slug}`,
            lastModified: new Date(blog.updated_at || new Date()),
            changeFrequency: 'weekly',
            priority: 0.7,
        }))
        : [];

    // Dynamic Operation Routes
    const operationRoutes = Array.isArray(operations)
        ? operations.map((op) => ({
            url: `${baseUrl}/operation-details/${op.slug}`,
            lastModified: new Date(op.updated_at || new Date()),
            changeFrequency: 'weekly',
            priority: 0.7,
        }))
        : [];

    return [...staticRoutes, ...blogRoutes, ...operationRoutes];
}
