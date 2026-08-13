"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from '../../../../../context/LanguageContext';
import HeroSection from '../../../../components/HeroSection';
import ScrollTicker from '../../../../components/ScrollTicker';
import BookingForm from '../../../../components/BookingForm';
import { formatDate, toISODate } from '../../../../utils/formatDate';
import { embedMedia, getYoutubeId, getTiktokId, youtubeEmbedSrc, tiktokEmbedSrc, YOUTUBE_ALLOW, TIKTOK_ALLOW } from '../../../../utils/embeds';

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

        // Turn YouTube / TikTok links (and raw iframes) into responsive embeds
        formatted = embedMedia(formatted);

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
    const publishedDate = formatDate(operation.created_at, language);

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
                                    <div className="article-meta mb-3">
                                        <p className="blog-editor mb-0" style={{ fontWeight: 600 }}>
                                            <i className="fas fa-user-edit" style={{ marginInlineEnd: '8px', color: '#4fc3f7' }}></i>
                                            {language === "ar" ? "تحرير: " : "Edited by: "}
                                            <Link href={`/${language}/about`} style={{ color: '#4fc3f7' }}>
                                                {language === "ar" ? "دكتور عبد الله المنيفي" : "Dr. Abdullah AlMunifi"}
                                            </Link>
                                        </p>
                                        {publishedDate && (
                                            <time className="post-date" dateTime={toISODate(operation.created_at)}>
                                                <i className="far fa-calendar-alt" style={{ marginInlineEnd: '8px', color: '#4fc3f7' }}></i>
                                                {language === "ar" ? "نُشر في " : "Published on "}{publishedDate}
                                            </time>
                                        )}
                                    </div>
                                    {renderContent()}

                                    {/* Dedicated YouTube video field from the backend */}
                                    {(() => {
                                        const videoId = getYoutubeId(operation.video_url || operation.youtube_url || operation.video);
                                        if (!videoId) return null;
                                        return (
                                            <div className="video-responsive my-4">
                                                <iframe
                                                    src={youtubeEmbedSrc(videoId)}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow={YOUTUBE_ALLOW}
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        );
                                    })()}

                                    {/* Dedicated TikTok video field from the backend */}
                                    {(() => {
                                        const tiktokId = getTiktokId(operation.tiktok_url || operation.tiktok);
                                        if (!tiktokId) return null;
                                        return (
                                            <div className="video-responsive video-tiktok my-4">
                                                <iframe
                                                    src={tiktokEmbedSrc(tiktokId)}
                                                    title="TikTok video player"
                                                    frameBorder="0"
                                                    allow={TIKTOK_ALLOW}
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        );
                                    })()}
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
