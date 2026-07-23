import React from 'react'
import { getBlogDetails } from '../../../api/blog';
import BlogDetailContent from './components/BlogDetailContent';
import { permanentRedirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

// Helper to fetch data with resilient slug handling
async function getBlog(slug) {
    try {
        // 1. Try with the original slug
        let data = await getBlogDetails(slug);

        if (data && data.id) return data;

        // 2. If it has hyphens, try replacing them with spaces
        if (slug.includes('-')) {
            const spaceSlug = slug.replace(/-/g, ' ');
            data = await getBlogDetails(spaceSlug);

            if (data && data.id) return data;
        }

        // 3. If it has spaces, try replacing them with hyphens
        if (slug.includes(' ')) {
            const hyphenSlug = slug.replace(/ /g, '-');
            data = await getBlogDetails(hyphenSlug);

            if (data && data.id) return data;
        }

        return null;
    } catch (error) {
        console.error(`Error fetching blog "${slug}":`, error.message);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug: encodedSlug, lang } = await params;
    const slug = decodeURIComponent(encodedSlug);
    const blog = await getBlog(slug);

    if (!blog) return {};

    const isAr = lang === 'ar';

    const title = isAr
        ? (blog.meta_title_ar || blog.title_ar)
        : (blog.meta_title_en || blog.title_en);

    const description = isAr
        ? (blog.meta_description_ar || blog.description_ar)
        : (blog.meta_description_en || blog.description_en);

    return {
        title,
        description,
        icons: {
            icon: '/assets/img/favicon.svg',
            shortcut: '/assets/img/favicon.svg',
        },
        openGraph: {
            title,
            description,
            images: blog.photo_url ? [blog.photo_url] : ["/assets/img/favicon.svg"],
        },
        alternates: {
            canonical: `https://almunifi.com/${lang}/blogs/${isAr ? blog.slug_ar : blog.slug}`,
            languages: {
                ar: `https://almunifi.com/ar/blogs/${blog.slug_ar}`,
                en: `https://almunifi.com/en/blogs/${blog.slug}`,
                'x-default': `https://almunifi.com/ar/blogs/${blog.slug_ar}`,
            }
        }
    }
}

export default async function BlogDetailsPage({ params }) {
    const { slug: encodedSlug, lang } = await params;
    const slug = decodeURIComponent(encodedSlug);
    const blog = await getBlog(slug);
    if (!blog) permanentRedirect(`/${lang}`);

    return (
        <>
            <BlogDetailContent blog={blog} />
        </>
    )
}
