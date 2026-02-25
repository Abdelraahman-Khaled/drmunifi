"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import BlogContent from '@/app/blogs/components/BlogContent'
import { getBlogs } from '@/app/api/blog'

const HomeBlog = () => {
    const { language } = useLanguage();
    const t = translations.home[language].blog;
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                setBlogs(Array.isArray(data) ? data.slice(0, 3) : []);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <section className="blog-area ptb-100 bg-f4f9fd">
            <div className="container">
                <div className="section-title">
                    <span>{t.title}</span>
                    <h2>{t.subTitle}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row mt-4">
                    {loading ? (
                        <div className="col-12 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : blogs.length > 0 ? (
                        blogs.map((blog) => {
                            const blogImage = blog.photos?.find(p => language === "ar" ? p.is_arabic : !p.is_arabic)?.url || blog.photos?.[0]?.url || blog.image || blog.photo_url;
                            const blogAlt = blog.photos?.find(p => language === "ar" ? p.is_arabic : !p.is_arabic)?.alt || blog.photos?.[0]?.alt || blog.alt || blog.alt_url;

                            return (
                                <div key={blog.id} className="col-lg-4 col-md-6">
                                    <BlogContent
                                        image={blogImage}
                                        title={language === "ar" ? blog.title_ar : blog.title_en || blog.title_ar}
                                        description={language === "ar" ? blog.description_ar : blog.description_en || blog.description_ar}
                                        slug={language === "ar" ? blog.slug_ar : blog.slug || blog.slug_en}
                                        alt={blogAlt}
                                    />
                                </div>
                            )
                        })
                    ) : (
                        <div className="col-12 text-center">
                            <p>{t.no_data || ""}</p>
                        </div>
                    )}
                </div>

                <div className="text-center mt-5">
                    <Link href={`/blogs`} className="btn btn-primary">
                        {t.btn} <i className="flaticon-right-chevron"></i>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .single-blog-post {
                    transition: all 0.3s ease;
                }
                .single-blog-post:hover {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    transform: translateY(-5px);
                }
                .post-image img {
                    transition: transform 0.3s ease;
                }
                .single-blog-post:hover .post-image img {
                    transform: scale(1.1);
                }
                .hover-primary:hover {
                    color: var(--main-color) !important;
                }
            `}</style>
        </section>
    )
}

export default HomeBlog;
