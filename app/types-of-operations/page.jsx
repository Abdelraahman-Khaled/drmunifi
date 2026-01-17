
"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import OperationsContainer from './components/OperationsContainer'
import { useLanguage } from '@/context/LanguageContext'

const page = () => {
    const { language } = useLanguage();

    return (
        <>
            <HeroSection title={language === "ar" ? "أنواع العمليات" : "Types of Operations"} number={4} />
            <ScrollTicker />
            <OperationsContainer />
        </>
    )
}

export default page