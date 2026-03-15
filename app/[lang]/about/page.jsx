import React from 'react'
import HeroSection from '../../components/HeroSection'
import ScrollTicker from '../../components/ScrollTicker'
import AboutHero from './components/AboutHero'
import OurVision from './components/OurVision'
import OurApproach from './components/OurApproach'

export async function generateMetadata({ params }) {
    const lang = (await params).lang || 'ar';
    const isAr = lang === 'ar';
    
    return {
        title: isAr ? "عن الدكتور عبدالله المنيفي - الخبرات والمؤهلات" : "About Dr. Abdullah AlMunifi - Experience & Qualifications",
        description: isAr 
            ? "تعرف على مسيرة الدكتور عبدالله المنيفي المهنية، مؤهلاته العلمية، وخبرته الواسعة في جراحات السمنة والمناظير."
            : "Learn about Dr. Abdullah AlMunifi's career, scientific qualifications, and extensive experience in bariatric and laparoscopic surgeries.",
        alternates: {
            canonical: `https://almunifi.com/${lang}/about`,
            languages: {
                ar: 'https://almunifi.com/ar/about',
                en: 'https://almunifi.com/en/about',
            },
        }
    };
}

const Page = async ({ params }) => {
    const lang = (await params).lang || 'ar';
    const isAr = lang === 'ar';

    return (
        <>
            <HeroSection
                title={isAr ? "نبذة عن الدكتور" : "About The Doctor"}
                subTitle={isAr ? "الرئيسية" : "Home"}
                subTitleLink={`/${lang}`}
                number={3}
            />
            <ScrollTicker />
            <AboutHero />
            <OurVision />
            <OurApproach />
        </>
    )
}

export default Page