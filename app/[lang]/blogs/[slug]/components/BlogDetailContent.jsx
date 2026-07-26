"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from '../../../../../context/LanguageContext';
import HeroSection from '../../../../components/HeroSection';
import ScrollTicker from '../../../../components/ScrollTicker';
import FAQ from '../../../../components/FAQ';

const BlogDetailContent = ({ blog }) => {
    const { language, setPathMap } = useLanguage();
    const router = useRouter();
    const params = useParams();
    const urlSlug = params?.slug;
    console.log(blog);

    // Update path map for direct context switching (prevents double render on toggle)
    useEffect(() => {
        if (!blog) return;
        setPathMap({
            ar: `/ar/blogs/${blog.slug_ar || blog.slug}`,
            en: `/en/blogs/${blog.slug || blog.slug_ar}`
        });

        // Cleanup on unmount
        return () => setPathMap(null);
    }, [blog, setPathMap]);

    // Secondary safety: redirect if manually entered wrong slug for language
    useEffect(() => {
        if (!blog) return;

        const targetSlug =
            language === "ar"
                ? blog.slug_ar || blog.slug
                : blog.slug || blog.slug_ar;

        if (urlSlug && decodeURIComponent(urlSlug) !== targetSlug) {
            const basePath = `/${language}/blogs`;
            router.replace(`${basePath}/${targetSlug}`, { scroll: false });
        }
    }, [language, blog, urlSlug, router]);

    // Helper to format content: add features-list class to uls, and checkmark icon to lis
    const formatContent = (htmlContent) => {
        if (!htmlContent) return "";
        let formatted = htmlContent;
        // Add class 'features-list' to all <ul> tags if not already present
        formatted = formatted.replace(/<ul(?![^>]*class=["'][^"']*features-list[^"']*["'])([^>]*)>/gi, '<ul class="features-list" $1>');

        // Add checkmark icon to start of <li> if not already present
        // We use a simple regex replacing <li> with <li><i class="..."></i>
        // Ensure we don't add it if it's already there to avoid duplication on re-renders if content is stateful (though here it's prop-based)
        formatted = formatted.replace(/<li>(?!<i class="flaticon-check-mark"><\/i>)/gi, '<li><i class="flaticon-check-mark"></i> ');

        // The backend may store the iframe HTML-escaped (&lt;iframe ...&gt;), which shows
        // up as plain text. Decode any escaped iframe back to a real element first.
        formatted = formatted.replace(/&lt;iframe[\s\S]*?&lt;\/iframe&gt;/gi, (match) =>
            match
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")
                .replace(/&amp;/g, '&')
        );

        // Convert a plain YouTube link wrapped in an <a> tag into a responsive embed
        formatted = formatted.replace(
            /<a\b[^>]*href=["'](https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)[A-Za-z0-9_-]{11}[^"']*)["'][^>]*>[\s\S]*?<\/a>/gi,
            (match, url) => buildYoutubeEmbed(getYoutubeId(url), /\/shorts\//i.test(url)) || match
        );

        // Convert a bare YouTube link (plain text) into a responsive embed
        formatted = formatted.replace(
            /(^|[\s>(])((?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)[A-Za-z0-9_-]{11}[^\s<)]*)/gi,
            (match, pre, url) => {
                const embed = buildYoutubeEmbed(getYoutubeId(url), /\/shorts\//i.test(url));
                return embed ? pre + embed : match;
            }
        );

        // Wrap any <iframe> (e.g. YouTube embeds coming from the backend) in a responsive
        // container — skip ones already wrapped to avoid double wrapping.
        formatted = formatted.replace(/(?<!<div class="video-responsive[^"]*">)(<iframe[\s\S]*?<\/iframe>)/gi, '<div class="video-responsive">$1</div>');

        return formatted;
    };

    // Extract a YouTube video ID from a full URL or a raw ID
    const getYoutubeId = (value) => {
        if (!value) return "";
        const patterns = [
            /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
            /^([A-Za-z0-9_-]{11})$/,
        ];
        for (const re of patterns) {
            const match = value.match(re);
            if (match) return match[1];
        }
        return "";
    };

    // Build a YouTube embed from a video ID. Shorts get a portrait (9:16) wrapper;
    // normal videos return a bare iframe that the generic wrapper handles as 16:9.
    const buildYoutubeEmbed = (videoId, isShort = false) => {
        if (!videoId) return "";
        const iframe = `<iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        return isShort ? `<div class="video-responsive video-short">${iframe}</div>` : iframe;
    };

    // Helper to strip HTML tags for schema
    const stripHtml = (html) => {
        if (!html) return "";
        return html.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
    };

    // Render Logic
    const renderContent = () => {
        if (blog.contents && Array.isArray(blog.contents)) {
            return blog.contents.map((section, index) => (
                <div key={index} className="blog-section mb-4">
                    {/* Section Content */}
                    <div dangerouslySetInnerHTML={{ __html: formatContent(language === 'ar' ? (section.content_ar || section.content_en) : (section.content_en || section.content_ar)) }} />

                    {/* Section Images */}
                    {section.photos && section.photos.length > 0 && (
                        <div className="row row-images mt-3">
                            {section.photos.map((img, imgIndex) => (
                                <div key={imgIndex} className="col-12 col-md-6 mb-3">
                                    <figure>
                                        <Image
                                            src={img.url}
                                            alt={(language === 'ar' ? img.alt_ar : img.alt_en) || img.alt || (language === 'ar' ? (blog.title_ar || 'صورة المدونة') : (blog.title_en || 'Blog image'))}
                                            width={1200}
                                            height={630}
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
            // Fallback for simple content
            return <div dangerouslySetInnerHTML={{ __html: formatContent(language === 'ar' ? (blog.content_ar || blog.content) : (blog.content_en || blog.content)) }} />;
        }
    };

    if (!blog) return null;

    // FAQ Schema Logic
    const faqSchema = blog?.faqs?.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": blog.faqs.map(faq => ({
            "@type": "Question",
            "name": language === "ar" ? faq.question_ar : faq.question_en,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": stripHtml(language === "ar" ? faq.answer_ar : faq.answer_en)
            }
        }))
    } : null;

    return (
        <>
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <HeroSection title={language === "ar" ? blog.title_ar : blog.title_en} subTitle={language === "ar" ? "المدونة" : "Blog"} subTitleLink={`/${language}/blogs`} number={2} />
            <ScrollTicker />
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    {(() => {
                                        const mainPhoto = blog.photos?.find(p => language === "ar" ? p.is_arabic : !p.is_arabic) || blog.photos?.[0];
                                        const mainImage = mainPhoto?.url || blog.image || blog.photo_url;
                                        const mainAlt = mainPhoto?.alt || (language === 'ar' ? (blog.title_ar || blog.title_en) : (blog.title_en || blog.title_ar));

                                        return (
                                            <Image
                                                className='rounded-5'
                                                src={mainImage}
                                                alt={mainAlt}
                                                width={1200}
                                                height={600}
                                                style={{ width: '100%', height: 'auto' }}
                                                priority
                                            />
                                        );
                                    })()}
                                </div>

                                <div className="article-content mt-4">
                                    <p className="blog-editor mb-3" style={{ fontWeight: 600 }}>
                                        <i className="fas fa-user-edit" style={{ marginInlineEnd: '8px', color: '#4fc3f7' }}></i>
                                        {language === "ar" ? "تحرير: " : "Edited by: "}
                                        <Link href={`/${language}/about`} style={{ color: '#4fc3f7' }}>
                                            {language === "ar" ? "دكتور عبد الله المنيفي" : "Dr. Abdullah AlMunifi"}
                                        </Link>
                                    </p>
                                    {/* Use the render helper */}
                                    {renderContent()}

                                    {/* Dedicated YouTube video field from the backend */}
                                    {(() => {
                                        const videoId = getYoutubeId(blog.video_url || blog.youtube_url || blog.video);
                                        if (!videoId) return null;
                                        return (
                                            <div className="video-responsive my-4">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${videoId}`}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        );
                                    })()}
                                    {blog && blog.faqs && Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
                                        <FAQ items={blog.faqs} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default BlogDetailContent;
