import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "./components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import MagicCursor from "./components/MagicCursor";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "الدكتور عبدالله المنيفي - الرئيسية",
    description: "Dr.Abdullah Munifi",
};




export default function RootLayout({ children }) {
    // Note: Since this is a server component, we use ar as default.
    // The LanguageProvider will update document attributes on the client.
    return (
        <LanguageProvider initialLanguage="ar">
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
                <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
                </body>
            </html>
        </LanguageProvider>
    );
}
