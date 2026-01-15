"use client"
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

export const HomeHero = () => {
    const { language } = useLanguage();
    const t = translations.home[language].hero;
    const isAr = language === 'ar';

    return (

        <div className="main-banner-video">
            <video playsInline loop muted autoPlay className="background-video">
                <source src="/assets/img/banner-video.mov" type="video/mp4" />
            </video>
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <h1>{t.title}</h1>
                                <p>{t.desc}</p>

                                <div className="btn-box">
                                    <Link href={isAr ? "/contact" : "/en/contact"} className="btn btn-primary mx-1">
                                        {t.btn1}
                                        <i className="fas fa-bell"></i>
                                    </Link>
                                    <Link href={isAr ? "/types-of-operations" : "/en/types-of-operations"} className="btn btn-light mx-1">
                                        {t.btn2}
                                        <i className={isAr ? "fas fa-arrow-left" : "fas fa-arrow-right"}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
