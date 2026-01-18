"use client"
import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import ContactForm from './components/ContactForm'
import { useLanguage } from '@/context/LanguageContext'

const ContactPage = () => {
    const { language } = useLanguage();
    const isAr = language === 'ar';

    return (
        <>
            <HeroSection
                title={isAr ? "تواصل معنا" : "Contact Us"}
                subTitle={isAr ? "الرئيسية" : "Home"}
                subTitleLink={"/"}
                number={1}
            />
            <ScrollTicker />
            <ContactForm />
        </>
    )
}

export default ContactPage;