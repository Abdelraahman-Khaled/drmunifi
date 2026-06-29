import React from 'react'
import HeroSection from '../../components/HeroSection'
import ScrollTicker from '../../components/ScrollTicker'
import BlogsContainer from './components/BlogsContainer'
import { getBlogs } from '../../api/blog'

export async function generateMetadata({ params }) {
    const lang = (await params).lang || 'ar';
    const isAr = lang === 'ar';

    return {
        title: isAr ? "مقالات عن جراحة السمنة لمساعدتك في رحلتك نحو حياة صحية" : "Articles about bariatric surgery to help you on your journey to a healthy life",
        description: isAr
            ? "بخبرة الدكتور عبد الله المنيفي، اقرأ المزيد عن جراحة السمنة واختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية"
            : "With the expertise of Dr. Abdullah AlMunifi, read more about bariatric surgery and choose the perfect bariatric surgery for you and start your journey towards a healthy life.",
        alternates: {
            canonical: `https://almunifi.com/${lang}/blogs`,
            languages: {
                ar: 'https://almunifi.com/ar/blogs',
                en: 'https://almunifi.com/en/blogs',
                'x-default': 'https://almunifi.com/ar/blogs',
            },
        },
        openGraph: {
            title: isAr ? "مقالات عن جراحة السمنة لمساعدتك في رحلتك نحو حياة صحية" : "Articles about bariatric surgery to help you on your journey to a healthy life",
            description: isAr
                ? "بخبرة الدكتور عبد الله المنيفي، اقرأ المزيد عن جراحة السمنة واختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية"
                : "With the expertise of Dr. Abdullah AlMunifi, read more about bariatric surgery and choose the perfect bariatric surgery for you and start your journey towards a healthy life.",
            url: `https://almunifi.com/${lang}/blogs`,
            siteName: 'Dr. Abdullah AlMunifi',
            images: [
                {
                    url: 'https://almunifi.com/assets/images/logo.png',
                    width: 1200,
                    height: 630,
                    alt: isAr ? 'مقالات عن جراحة السمنة لمساعدتك في رحلتك نحو حياة صحية' : 'Articles about bariatric surgery to help you on your journey to a healthy life',
                },
            ],
            locale: lang,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: isAr ? "مقالات عن جراحة السمنة لمساعدتك في رحلتك نحو حياة صحية" : "Articles about bariatric surgery to help you on your journey to a healthy life",
            description: isAr
                ? "بخبرة الدكتور عبد الله المنيفي، اقرأ المزيد عن جراحة السمنة واختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية"
                : "With the expertise of Dr. Abdullah AlMunifi, read more about bariatric surgery and choose the perfect bariatric surgery for you and start your journey towards a healthy life.",
            images: ['https://almunifi.com/assets/images/logo.png'],
        },
    };
}

const Page = async ({ params }) => {
    const lang = (await params).lang || 'ar';

    let blogs = [];
    try {
        blogs = await getBlogs();
    } catch (error) {
        console.error("Failed to fetch blogs in blogs page:", error);
    }

    return (
        <>
            <HeroSection title={lang === 'ar' ? "المدونة و الأخبار" : "Blog & News"} number={2} />
            <ScrollTicker />
            <BlogsContainer initialBlogs={Array.isArray(blogs) ? blogs : []} />
        </>
    )
}

export default Page;