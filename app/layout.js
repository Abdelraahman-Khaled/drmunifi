import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "./components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import MagicCursor from "./components/MagicCursor";
import Script from "next/script";

export const metadata = {
    metadataBase: new URL('https://dralmunifi.com'),
    title: {
        default: "الدكتور عبدالله المنيفي - جراحة السمنة والمناظير",
        template: "%s | الدكتور عبدالله المنيفي"
    },
    description: "الدكتور عبدالله المنيفي استشاري جراحة السمنة والمناظير المتقدمة. متخصص في تكميم المعدة، تحويل المسار، والحلول الجراحية الدقيقة للسمنة في المملكة العربية السعودية.",
    keywords: ["جراحة السمنة", "تكميم المعدة", "تحويل المسار", "دكتور عبدالله المنيفي", "Bariatric Surgery", "Gastric Sleeve", "Saudi Arabia"],
    authors: [{ name: "Dr. Abdullah AlMunifi" }],
    creator: "Dr. Abdullah AlMunifi",
    publisher: "Dr. Abdullah AlMunifi",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'ar_SA',
        alternateLocale: 'en_US',
        url: 'https://dralmunifi.com',
        siteName: 'Dr. Abdullah AlMunifi',
        title: "الدكتور عبدالله المنيفي - خيارك الأول لجراحة السمنة",
        description: "استشاري جراحة السمنة والمناظير المتقدمة. نقدم رعاية طبية متكاملة لمرضى السمنة بأحدث التقنيات.",
        images: [
            {
                url: '/assets/img/about-img1.webp', // Using the about image as a fallback OG image
                width: 1200,
                height: 630,
                alt: 'Dr. Abdullah AlMunifi',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "الدكتور عبدالله المنيفي",
        description: "استشاري جراحة السمنة والمناظير المتقدمة.",
        images: ['/assets/img/about-img1.webp'],
        creator: '@DrAlMunifi', // Assuming finding this handle from the Navbar link
    },
    icons: {
        icon: '/assets/img/favicon.png',
        shortcut: '/assets/img/favicon.png',
        apple: '/assets/img/favicon.png',
    },
};




export default function RootLayout({ children }) {
    // Note: Since this is a server component, we use ar as default.
    // The LanguageProvider will update document attributes on the client.
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-straight/css/uicons-regular-straight.css"
                />
                <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/style-ar.css" />
            </head>
            <body>
                <LanguageProvider initialLanguage="ar">
                    <MagicCursor />
                    <Preloader />
                    <Navbar />
                    {children}
                    <Footer />

                    {/* Scripts */}
                    <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
                    <Script src="/assets/js/bootstrap.bundle.min.js" />
                    <Script src="/assets/js/owl.carousel.min.js" />
                    <Script src="/assets/js/slick.min.js" />
                    <Script src="/assets/js/jquery.magnific-popup.min.js" />
                    <Script src="/assets/js/jquery.nice-select.min.js" />
                    <Script src="/assets/js/jquery.meanmenu.js" />
                    <Script src="/assets/js/jquery.ajaxchimp.min.js" />
                    <Script src="/assets/js/parallax.min.js" />
                    <Script src="/assets/js/jquery.appear.min.js" />
                    <Script src="/assets/js/wow.min.js" />
                    <Script src="/assets/js/main.js" strategy="lazyOnload" />
                </LanguageProvider>
            </body>
        </html>
    );
}
