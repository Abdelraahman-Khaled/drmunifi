import React from 'react'
import HeroSection from '../../components/HeroSection'
import ScrollTicker from '../../components/ScrollTicker'
import OperationsContainer from './components/OperationsContainer'
import BookingForm from '../../components/BookingForm'

export async function generateMetadata({ params }) {
    const lang = (await params).lang || 'ar';
    const isAr = lang === 'ar';

    return {
        title: isAr ? "اختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية" : "Choose the perfect bariatric surgery for you and start your journey towards a healthy life",
        description: isAr
            ? "بخبرة الدكتور عبد الله المنيفي، استعد لتحقيق التحول الذي طالما حلمت به، اختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية وجسم مثالي"
            : "With the expertise of Dr. Abdullah AlMunifi, get ready to achieve the transformation you've always dreamed of, choose the perfect bariatric surgery for you and start your journey towards a healthy life and an ideal body.",
        alternates: {
            canonical: `https://almunifi.com/${lang}/types-of-operations`,
            languages: {
                ar: 'https://almunifi.com/ar/types-of-operations',
                en: 'https://almunifi.com/en/types-of-operations',
                'x-default': 'https://almunifi.com/ar/types-of-operations',
            },
        },
        openGraph: {
            title: isAr ? "اختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية" : "Choose the perfect bariatric surgery for you and start your journey towards a healthy life",
            description: isAr
                ? "بخبرة الدكتور عبد الله المنيفي، استعد لتحقيق التحول الذي طالما حلمت به، اختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية وجسم مثالي"
                : "With the expertise of Dr. Abdullah AlMunifi, get ready to achieve the transformation you've always dreamed of, choose the perfect bariatric surgery for you and start your journey towards a healthy life and an ideal body.",
            url: `https://almunifi.com/${lang}/types-of-operations`,
            siteName: 'Dr. Abdullah AlMunifi',
            images: [
                {
                    url: 'https://almunifi.com/assets/images/logo.png',
                    width: 1200,
                    height: 630,
                    alt: isAr ? 'اختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية' : 'Choose the perfect bariatric surgery for you and start your journey towards a healthy life',
                },
            ],
            locale: lang,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: isAr ? "اختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية" : "Choose the perfect bariatric surgery for you and start your journey towards a healthy life",
            description: isAr
                ? "بخبرة الدكتور عبد الله المنيفي، استعد لتحقيق التحول الذي طالما حلمت به، اختر جراحة السمنة المثالية لك وابدأ رحلتك نحو حياة صحية وجسم مثالي"
                : "With the expertise of Dr. Abdullah AlMunifi, get ready to achieve the transformation you've always dreamed of, choose the perfect bariatric surgery for you and start your journey towards a healthy life and an ideal body.",
            images: ['https://almunifi.com/assets/images/logo.png'],
        },
    };
}

const Page = async ({ params }) => {
    const lang = (await params).lang || 'ar';

    return (
        <>
            <HeroSection title={lang === "ar" ? "أنواع العمليات" : "Types of Operations"} number={4} />
            <ScrollTicker />
            <OperationsContainer />
            <BookingForm />
        </>
    )
}

export default Page