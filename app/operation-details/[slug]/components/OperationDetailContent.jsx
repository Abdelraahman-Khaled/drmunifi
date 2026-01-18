"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useLanguage } from '@/context/LanguageContext';
import HeroSection from '@/app/components/HeroSection';
import ScrollTicker from '@/app/components/ScrollTicker';

const OperationDetailContent = ({ operation }) => {
    const { language } = useLanguage();
    const router = useRouter();
    const prevLanguage = useRef(language);

    useEffect(() => {
        if (!operation) return;

        // Only redirect if language effectively changed
        if (prevLanguage.current === language) return;

        // Update ref
        prevLanguage.current = language;

        // Determine target slug
        const targetSlug =
            language === "ar"
                ? operation.slug_ar || operation.slug
                : operation.slug || operation.slug_ar;

        // Construct new path
        const basePath = '/operation-details';

        // Use replace to change URL without scroll
        router.replace(`${basePath}/${targetSlug}`, { scroll: false });
    }, [language, operation, router]);

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
                                            alt={language === 'ar' ? (img.image_alt_text_ar || img.image_alt_text_en || "") : (img.image_alt_text_en || img.image_alt_text_ar || "")}
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
                subTitleLink="/types-of-operations"
                number={2}
            />
            <ScrollTicker />
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services-details-desc">
                                <div className="services-details-image">
                                    <Image
                                        src={operation.photo_url || operation.image || "/images/operations/operation-1.jpg"}
                                        alt={title}
                                        width={200}
                                        height={200}
                                        priority
                                        className="rounded-5"
                                    />
                                </div>
                                <h1 className="mt-4">
                                    {title}
                                </h1>

                                <div className="article-content mt-4">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OperationDetailContent;
