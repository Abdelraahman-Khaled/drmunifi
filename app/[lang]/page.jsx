import React from 'react'
import { HomeHero } from './home/components/HomeHero'
import ScrollTicker from '../components/ScrollTicker'
import HomeAbout from './home/components/HomeAbout'
import HomeMission from './home/components/HomeMission'
import HomeImportance from './home/components/HomeImportance'
import VideoGallery from './home/components/VideoGallery'
import PhotoGallery from './home/components/PhotoGallery'
import BMICalculator from './home/components/BMICalculator'
import HomeOperations from './home/components/HomeOperations'
import HomeFeedback from './home/components/HomeFeedback'
import HomeFAQ from './home/components/HomeFAQ'
import HomeBlog from './home/components/HomeBlog'

export async function generateMetadata({ params }) {
    const lang = (await params).lang || 'ar';
    const isAr = lang === 'ar';
    
    return {
        title: isAr ? "الدكتور عبدالله المنيفي | استشاري جراحة السمنة والمناظير" : "Dr. Abdullah AlMunifi | Bariatric & Laparoscopic Surgery Consultant",
        description: isAr 
            ? "الصفحة الرئيسية للدكتور عبدالله المنيفي. اكتشف رحلة التحول مع جراحات السمنة المتقدمة، تكميم المعدة، وتحويل المسار بأحدث التقنيات."
            : "Home page of Dr. Abdullah AlMunifi. Discover the transformation journey with advanced bariatric surgeries, gastric sleeve, and gastric bypass.",
        alternates: {
            canonical: `https://almunifi.com/${lang}`,
            languages: {
                ar: 'https://almunifi.com/ar',
                en: 'https://almunifi.com/en',
            },
        }
    };
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Dr. Abdullah AlMunifi',
    image: 'https://almunifi.com/assets/img/logo.png',
    '@id': 'https://almunifi.com',
    url: 'https://almunifi.com',
    telephone: '+966535195519',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Riyadh',
        addressCountry: 'SA',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.7136,
        longitude: 46.6753,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
    },
    sameAs: [
        'https://x.com/DrAlMunifi',
        'https://www.instagram.com/DrAlMunifi',
        'https://www.youtube.com/@DrAlMunifi',
        'https://www.tiktok.com/@DrAlMunifi',
    ],
};

const Page = async ({ params }) => {
    const lang = (await params).lang || 'ar';

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div>
                <HomeHero />
                <ScrollTicker />
                <HomeAbout />
                <HomeMission />
                <HomeImportance />
                <VideoGallery />
                <PhotoGallery />
                <BMICalculator />
                <HomeOperations />
                <HomeFeedback />
                <HomeFAQ />
                <HomeBlog />
            </div>
        </>
    )
}

export default Page