import React from 'react'
import { getOperationDetails } from '../../../api/operations';
import OperationDetailContent from './components/OperationDetailContent';
import { notFound } from 'next/navigation';

async function getOperation(slug) {
    try {
        // 1. Try with the original slug
        let data = await getOperationDetails(slug);

        if (data && data.id) return data;

        // 2. If it has hyphens, try replacing them with spaces
        if (slug.includes('-')) {
            const spaceSlug = slug.replace(/-/g, ' ');
            data = await getOperationDetails(spaceSlug);

            if (data && data.id) return data;
        }

        // 3. If it has spaces, try replacing them with hyphens
        if (slug.includes(' ')) {
            const hyphenSlug = slug.replace(/ /g, '-');
            data = await getOperationDetails(hyphenSlug);

            if (data && data.id) return data;
        }

        return null;
    } catch (error) {
        console.error(`Error fetching operation "${slug}":`, error.message);
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug: encodedSlug, lang } = await params;
    const slug = decodeURIComponent(encodedSlug);
    const operation = await getOperation(slug);

    if (!operation) return {};

    const isAr = lang === 'ar';

    const title = isAr
        ? (operation.meta_title_ar || operation.title_ar)
        : (operation.meta_title_en || operation.title_en);

    const description = isAr
        ? (operation.meta_description_ar || operation.description_ar)
        : (operation.meta_description_en || operation.description_en);

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
            images: operation.photo_url ? [operation.photo_url] : ["/assets/img/favicon.svg"],
        },
        alternates: {
            canonical: `https://almunifi.com/${lang}/operation-details/${isAr ? operation.slug_ar : operation.slug}`,
            languages: {
                ar: `https://almunifi.com/ar/operation-details/${operation.slug_ar}`,
                en: `https://almunifi.com/en/operation-details/${operation.slug}`,
                'x-default': `https://almunifi.com/ar/operation-details/${operation.slug_ar}`,
            }
        }
    }
}

const OperationDetailsPage = async ({ params }) => {
    const { slug: encodedSlug } = await params;
    const slug = decodeURIComponent(encodedSlug);
    const operation = await getOperation(slug);

    if (!operation) {
        notFound();
    }

    return (
        <>
            <OperationDetailContent operation={operation} />
        </>
    )
}

export default OperationDetailsPage;
