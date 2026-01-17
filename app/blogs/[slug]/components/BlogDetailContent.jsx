"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useLanguage } from '@/context/LanguageContext';
import HeroSection from '@/app/components/HeroSection';
import ScrollTicker from '@/app/components/ScrollTicker';
import FAQ from '@/app/components/FAQ';

const BlogDetailContent = ({ blog }) => {
    const { language } = useLanguage();
    const router = useRouter();
    const prevLanguage = useRef(language);

    useEffect(() => {
        if (!blog) return;

        // Only redirect if language effectively changed
        if (prevLanguage.current === language) return;

        // Update ref
        prevLanguage.current = language;

        // Determine target slug
        const targetSlug =
            language === "ar"
                ? blog.slug_ar || blog.slug
                : blog.slug || blog.slug_ar; // Assumes slug_ar/slug exist. Fallback logic.

        // Construct new path. Checks if we are on /en or / (ar default). 
        // Adjust prefix based on language.
        // If switching to 'en', prefix /en/blogs/
        // If switching to 'ar', prefix /blogs/
        const basePath = language === 'ar' ? '/blogs' : '/blogs';

        // Use replace to change URL without scroll
        router.replace(`${basePath}/${targetSlug}`, { scroll: false });
    }, [language, blog, router]);

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

        return formatted;
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
                                            alt={language === 'ar' ? (img.image_alt_text_ar || img.image_alt_text_en || "") : (img.image_alt_text_en || img.image_alt_text_ar || "")}
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

    return (
        <>
            <HeroSection title={language === "ar" ? blog.title_ar : blog.title_en} subTitle={"المدونة"} subTitleLink="/blogs" number={2} />
            <ScrollTicker />
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <Image
                                        className='rounded-5'
                                        src={blog.image || blog.photo_url} // Handle various image props
                                        alt={language === 'ar' ? (blog.title_ar || blog.title_en) : (blog.title_en || blog.title_ar)}
                                        width={1200}
                                        height={600}
                                        style={{ width: '100%', height: 'auto' }}
                                        priority
                                    />
                                </div>

                                <div className="article-content mt-4">
                                    {/* Use the render helper */}
                                    {renderContent()}
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
