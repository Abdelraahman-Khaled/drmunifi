"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import AboutHero from './components/AboutHero'
import OurVision from './components/OurVision'
import OurApproach from './components/OurApproach'
import { useLanguage } from '@/context/LanguageContext'

const AboutPage = () => {
    const { language } = useLanguage();

    return (
        <>
            <HeroSection
                title={language === 'ar' ? "نبذة عن الدكتور" : "About The Doctor"}
                subTitle={language === 'ar' ? "الرئيسية" : "Home"}
                number={3}
            />
            <ScrollTicker />
            <AboutHero />
            <OurVision />
            <OurApproach />
        </>
    )
}

export default AboutPage;