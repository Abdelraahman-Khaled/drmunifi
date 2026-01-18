"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translation";

const NotFound = () => {
    const { language } = useLanguage();
    // Fallback to 'ar' if language is somehow undefined (e.g. server-side render mismatch), 
    // though this runs on client due to useLanguage.
    const t = translations.error404[language] || translations.error404.en;

    return (
        <div className="error-area ptb-100">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="error-content">
                            <h1>{t.title}</h1>
                            <h3>{t.subTitle}</h3>
                            <p>{t.desc}</p>
                            <Link href="/" className="btn btn-primary">
                                {t.btn}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .error-area {
                    height: 100vh;
                    background: #f8f9fa; /* Light grey background */
                    text-align: center;
                }
                .d-table {
                    width: 100%;
                    height: 100%;
                    display: table;
                }
                .d-table-cell {
                    display: table-cell;
                    vertical-align: middle;
                }
                .error-content h1 {
                    font-size: 100px;
                    font-weight: 900;
                    color: #030b58; 
                    margin-bottom: 20px;
                }
                .error-content h3 {
                    font-size: 24px;
                    margin-bottom: 15px;
                    font-weight: 600;
                }
                .error-content p {
                    margin-bottom: 25px;
                    font-size: 16px;
                    color: #666;
                }
            `}</style>
        </div>
    );
};

export default NotFound;
