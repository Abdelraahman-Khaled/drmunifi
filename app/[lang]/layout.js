import "../globals.css";
import { LanguageProvider } from "../../context/LanguageContext";
import Navbar from "../components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import MagicCursor from "../components/MagicCursor";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const lang = (await params).lang || "ar";
  const isAr = lang === "ar";

  return {
    metadataBase: new URL("https://almunifi.com"),
    title: {
      default: isAr
        ? "الدكتور عبدالله المنيفي - جراحة السمنة والمناظير"
        : "Dr. Abdullah AlMunifi - Bariatric & Laparoscopic Surgery",
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    description: isAr
      ? "الدكتور عبدالله المنيفي استشاري جراحة السمنة والمناظير المتقدمة. متخصص في تكميم المعدة، تحويل المسار، والحلول الجراحية الدقيقة للسمنة في المملكة العربية السعودية."
      : "Dr. Abdullah AlMunifi, Consultant in Bariatric and Advanced Laparoscopic Surgery. Specialist in Gastric Sleeve, Bypass, and precise surgical solutions for obesity in Saudi Arabia.",
    keywords: isAr
      ? [
          "جراحة السمنة",
          "تكميم المعدة",
          "تحويل المسار",
          "دكتور عبدالله المنيفي",
          "السعودية",
        ]
      : [
          "Bariatric Surgery",
          "Gastric Sleeve",
          "Bypass",
          "Dr. Abdullah AlMunifi",
          "Saudi Arabia",
        ],
    authors: [{ name: "Dr. Abdullah AlMunifi" }],
    creator: "Dr. Abdullah AlMunifi",
    publisher: "Dr. Abdullah AlMunifi",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_SA",
      url: `https://almunifi.com/${lang}`,
      siteName: "Dr. Abdullah AlMunifi",
      title: isAr
        ? "الدكتور عبدالله المنيفي - خيارك الأول لجراحة السمنة"
        : "Dr. Abdullah AlMunifi - Your Top Choice for Bariatric Surgery",
      description: isAr
        ? "استشاري جراحة السمنة والمناظير المتقدمة. نقدم رعاية طبية متكاملة لمرضى السمنة بأحدث التقنيات."
        : "Consultant in Bariatric and Advanced Laparoscopic Surgery. Providing comprehensive medical care for obesity patients with the latest technologies.",
      images: [
        {
          url: "/assets/img/about-img1.webp",
          width: 1200,
          height: 630,
          alt: "Dr. Abdullah AlMunifi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isAr ? "الدكتور عبدالله المنيفي" : "Dr. Abdullah AlMunifi",
      description: isAr
        ? "استشاري جراحة السمنة والمناظير المتقدمة."
        : "Consultant in Bariatric and Advanced Laparoscopic Surgery.",
      images: ["/assets/img/about-img1.webp"],
      creator: "@DrAlMunifi",
    },
    icons: {
      icon: "/assets/img/favicon.svg",
      shortcut: "/assets/img/favicon.svg",
      apple: "/assets/img/favicon.svg",
    },
  };
}

export default async function RootLayout({ children, params }) {
  const lang = (await params).lang || "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/3.0.0/uicons-regular-straight/css/uicons-regular-straight.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
        {lang === "ar" && (
          <link rel="stylesheet" href="/assets/css/style-ar.css" />
        )}
        <meta
          name="google-site-verification"
          content="8Cw1icN49KSSlD_rZ7O6lRWcDdrI7eT-trjQ_-3Zy88"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WTPCCCX9');`}
        </Script>
        <meta
          name="google-site-verification"
          content="my6iKVtZXrzuJuUzAxR-qRorYsSQ1JPGy--Tl7zUVn4"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTPCCCX9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <LanguageProvider initialLanguage={lang}>
          <MagicCursor />
          <FloatingWhatsApp />
          <Preloader />
          <Navbar />
          {children}
          <Footer />

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
