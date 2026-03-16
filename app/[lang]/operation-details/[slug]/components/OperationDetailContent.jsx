"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from '../../../../../context/LanguageContext';
import HeroSection from '../../../../components/HeroSection';
import ScrollTicker from '../../../../components/ScrollTicker';
import BookingForm from '../../../../components/BookingForm';

const OperationDetailContent = ({ operation }) => {
    const { language, setPathMap } = useLanguage();
    const router = useRouter();
    const params = useParams();
    const urlSlug = params?.slug;

    // Update path map for direct context switching (prevents double render on toggle)
    useEffect(() => {
        if (!operation) return;
        setPathMap({
            ar: `/ar/operation-details/${operation.slug_ar || operation.slug}`,
            en: `/en/operation-details/${operation.slug || operation.slug_ar}`
        });

        // Cleanup on unmount
        return () => setPathMap(null);
    }, [operation, setPathMap]);

    // Secondary safety: redirect if manually entered wrong slug for language
    useEffect(() => {
        if (!operation) return;

        // Determine target slug
        const targetSlug =
            language === "ar"
                ? operation.slug_ar || operation.slug
                : operation.slug || operation.slug_ar;

        // Check if current URL slug matches target slug (decoded for comparison)
        if (urlSlug && decodeURIComponent(urlSlug) !== targetSlug) {
            const basePath = `/${language}/operation-details`;
            router.replace(`${basePath}/${targetSlug}`, { scroll: false });
        }
    }, [language, operation, urlSlug, router]);

    // Helper to format content: add features-list class to uls, and checkmark icon to lis
    const formatContent = (htmlContent) => {
        if (!htmlContent) return "";
        let formatted = htmlContent;
        // Add class 'features-list' to all <ul> tags if not already present
        formatted = formatted.replace(/<ul(?![^>]*class=["'][^"']*features-list[^"']*["'])([^>]*)>/gi, '<ul class="services-features-list my-4" $1>');

        // Add checkmark icon to start of <li> if not already present
        // We use a simple regex replacing <li> with <li><i class="..."></i>
        // Ensure we don't add it if it's already there to avoid duplication on re-renders if content is stateful (though here it's prop-based)
        formatted = formatted.replace(/<li>(?!<i class="flaticon-check-mark"><\/i>)/gi, '<li><i class="flaticon-check-mark"></i> ');

        return formatted;
    };

    // Render Logic for contents array if it exists (similar to blog) or fallback to simple content
    const renderContent = () => {
        if (operation.contents && Array.isArray(operation.contents)) {
            return operation.contents.map((section, index) => (
                <div key={index} className="operation-section mb-4 ">
                    {/* Section Content */}
                    <div className='services-details-desc' dangerouslySetInnerHTML={{ __html: formatContent(language === 'ar' ? (section.content_ar || section.content_en) : (section.content_en || section.content_ar)) }} />

                    {/* Section Images */}
                    {section.photos && section.photos.length > 0 && (
                        <div className="row row-images mt-3">
                            {section.photos.map((img, imgIndex) => (
                                <div key={imgIndex} className="col-12 col-md-6 mb-3">
                                    <figure>
                                        <Image
                                            src={img.url}
                                            alt={language === 'ar' ? (img.alt_ar || img.alt_en || "") : (img.alt_en || img.alt_ar || "")}
                                            width={550}
                                            height={330}
                                            className="img-fluid rounded"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </figure>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ));
        } else {
            // Fallback for simple content field from API (likely 'content' or 'content_ar'/'content_en')
            // Based on previous files, operations might just use 'content' or specific lang fields is not guaranteed in same way as blogs. 
            // But following BlogDetailContent pattern:
            return <div dangerouslySetInnerHTML={{ __html: formatContent(language === 'ar' ? (operation.content_ar || operation.content) : (operation.content_en || operation.content)) }} />;
        }
    };

    if (!operation) return null;

    const title = language === "ar" ? (operation.title_ar || operation.title) : (operation.title_en || operation.title);
    const subTitle = language === "ar" ? "أنواع جراحات السمنة" : "Types of Bariatric Surgeries";

    return (
        <>
            <HeroSection
                title={title}
                subTitle={subTitle}
                subTitleLink={`/${language}/types-of-operations`}
                number={2}
            />
            <ScrollTicker />
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services-details-desc">
                                <div className="services-details-image">
                                    {(() => {
                                        // Prefer is_landing: false for detail page, otherwise first available
                                        const mainPhoto = operation.photos?.find(p => p.is_landing === false) || operation.photos?.[0];
                                        const mainImage = mainPhoto?.url || operation.photo_url || operation.image || "/images/operations/operation-1.jpg";
                                        const mainAlt = language === 'ar' ? (mainPhoto?.alt_ar || title) : (mainPhoto?.alt_en || title);

                                        return (
                                            <Image
                                                src={mainImage}
                                                alt={mainAlt}
                                                width={1200}
                                                height={600}
                                                priority
                                                className="rounded-5"
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        );
                                    })()}
                                </div>

                                <div className="article-content mt-4">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BookingForm />
        </>
    );
};

export default OperationDetailContent;
