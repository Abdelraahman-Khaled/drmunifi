"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import { useLanguage } from '@/context/LanguageContext'
import ScrollTicker from '../components/ScrollTicker'
import BlogsContainer from './components/BlogsContainer'

const Page = () => {
    const { language } = useLanguage();

    return (
        <>
            <HeroSection title={language === 'ar' ? "المدونة و الأخبار" : "Blog & News"} number={2} />
            <ScrollTicker />
            <BlogsContainer />
        </>
    )
}

export default Page;