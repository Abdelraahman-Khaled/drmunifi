"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogs } from "@/app/api/blog";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translation";
import BlogContent from "./BlogContent";

const BlogsContainer = () => {
    const { language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState("*");
    const [blogsList, setBlogsList] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fallback for translations if not yet added to translation.js
    const t_data = translations.blogsPage?.[language] || {};
    const t = (key) => t_data[key] || key;

    const filters = [
        { label: t("all_articles"), value: "*" },
        { label: t("branding_and_identity"), value: "Branding" },
        { label: t("web_design_label"), value: "Web_design" },
        { label: t("graphic_design_label"), value: "Graphic_design" },
        { label: t("digital_marketing_label"), value: "digital_marketing" },
        { label: t("e_commerce_label"), value: "e_commerce" },
    ];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                // Ensure data is an array
                setBlogsList(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const filteredBlogs =
        activeFilter === "*"
            ? blogsList
            : blogsList.filter((blog) => blog.category === activeFilter);

    const handleFilterClick = (e, filterValue) => {
        e.preventDefault();
        setActiveFilter(filterValue);
    };

    return (
        <div className="page-blog ptb-100">
            <div className="container">

                {/* Filter Section - Uncomment if needed, currently hiding as per typical requirement, or keep if requested. 
            User provided code had it. Keeping it. 
        */}
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="our-Project-nav">
                            <ul>
                                {filters.map((filter) => (
                                    <li key={filter.value}>
                                        <Link
                                            href="#"
                                            className={
                                                activeFilter === filter.value ? "active-btn" : ""
                                            }
                                            onClick={(e) => handleFilterClick(e, filter.value)}
                                        >
                                            {filter.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {loading ? (
                        <div className="col-12 text-center mt-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-2 text-muted">Thinking...</p>
                        </div>
                    ) : (
                        <>
                            {filteredBlogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className={`col-lg-4 col-md-6 ${blog.category}`}
                                >
                                    <BlogContent
                                        image={blog.image || blog.photo_url}
                                        title={language === "ar" ? blog.title_ar : blog.title_en || blog.title_ar}
                                        description={language === "ar" ? blog.description_ar : blog.description_en || blog.description_ar}
                                        slug={language === "ar" ? blog.slug_ar : blog.slug || blog.slug_en}
                                    />
                                </div>
                            ))}

                            {filteredBlogs.length === 0 && (
                                <div className="col-12 text-center mt-5">
                                    <p>{t("no_articles_found")}</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogsContainer;