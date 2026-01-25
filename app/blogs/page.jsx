import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import BlogsContainer from './components/BlogsContainer'
import { getBlogs } from '@/app/api/blog'
import { cookies } from 'next/headers'

const Page = async () => {
    // Determine language from cookies or default to 'ar'
    const cookieStore = await cookies();
    const language = cookieStore.get("NEXT_LOCALE")?.value || "ar";

    let blogs = [];
    try {
        blogs = await getBlogs();
    } catch (error) {
        console.error("Failed to fetch blogs in blogs page:", error);
    }

    return (
        <>
            <HeroSection title={language === 'ar' ? "المدونة و الأخبار" : "Blog & News"} number={2} />
            <ScrollTicker />
            <BlogsContainer initialBlogs={Array.isArray(blogs) ? blogs : []} />
        </>
    )
}

export default Page;