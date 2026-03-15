import React from 'react'
import HeroSection from '../../components/HeroSection'
import ScrollTicker from '../../components/ScrollTicker'
import ContactForm from './components/ContactForm'

export async function generateMetadata({ params }) {
    const lang = (await params).lang || 'ar';
    const isAr = lang === 'ar';

    return {
        title: isAr ? "تواصل مع الدكتور عبد الله المنيفي، واحصل على استشارة الآن" : "Contact Dr. Abdullah AlMunifi, get your consultation now",
        description: isAr
            ? "تواصل مع الدكتور عبد الله المنيفي، تاريخ من التميز والابداع في العمليات الجراحية وعمليات السمنة، لا تتردد واحصل على استشارة الآن"
            : "Contact Dr. Abdullah AlMunifi, a history of excellence and innovation in surgical and bariatric surgeries, do not hesitate and get a consultation now.",
        alternates: {
            canonical: `https://almunifi.com/${lang}/contact`,
            languages: {
                ar: 'https://almunifi.com/ar/contact',
                en: 'https://almunifi.com/en/contact',
            },
        },
        openGraph: {
            title: isAr ? "تواصل مع الدكتور عبد الله المنيفي، واحصل على استشارة الآن" : "Contact Dr. Abdullah AlMunifi, get your consultation now",
            description: isAr
                ? "تواصل مع الدكتور عبد الله المنيفي، تاريخ من التميز والابداع في العمليات الجراحية وعمليات السمنة، لا تتردد واحصل على استشارة الآن"
                : "Contact Dr. Abdullah AlMunifi, a history of excellence and innovation in surgical and bariatric surgeries, do not hesitate and get a consultation now.",
            url: `https://almunifi.com/${lang}/contact`,
            siteName: 'Dr. Abdullah AlMunifi',
            images: [
                {
                    url: 'https://almunifi.com/assets/images/logo.png',
                    width: 1200,
                    height: 630,
                    alt: isAr ? "تواصل مع الدكتور عبد الله المنيفي، واحصل على استشارة الآن" : "Contact Dr. Abdullah AlMunifi, get your consultation now",
                },
            ],
            locale: lang,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: isAr ? "تواصل مع الدكتور عبد الله المنيفي، واحصل على استشارة الآن" : "Contact Dr. Abdullah AlMunifi, get your consultation now",
            description: isAr
                ? "تواصل مع الدكتور عبد الله المنيفي، تاريخ من التميز والابداع في العمليات الجراحية وعمليات السمنة، لا تتردد واحصل على استشارة الآن"
                : "Contact Dr. Abdullah AlMunifi, a history of excellence and innovation in surgical and bariatric surgeries, do not hesitate and get a consultation now.",
            images: ['https://almunifi.com/assets/images/logo.png'],
        },
    };
}

const Page = async ({ params }) => {
    const lang = (await params).lang || 'ar';
    const isAr = lang === 'ar';

    return (
        <>
            <HeroSection
                title={isAr ? "تواصل معنا" : "Contact Us"}
                subTitle={isAr ? "الرئيسية" : "Home"}
                subTitleLink={`/${lang}`}
                number={1}
            />
            <ScrollTicker />
            <ContactForm />
        </>
    )
}

export default Page