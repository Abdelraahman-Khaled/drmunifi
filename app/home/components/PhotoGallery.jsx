"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const PhotoGallery = () => {
    const { language } = useLanguage();
    const t = translations.home[language].photoGallery;

    return (
        <div className="page-gallery ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{t.title}</span>
                    <h2>{t.subTitle}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row justify-content-center">
                    {t.items.map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center" key={index}>
                            <div className="video-gallery-image" data-cursor-text={language === 'ar' ? 'عرض' : 'View'}>
                                <a
                                    href={item.pdf}
                                    className="popup-video Infographic"
                                    style={{ maxWidth: "300px" }}
                                >
                                    <figure>
                                        <Image
                                            src={item.thumb}
                                            alt="infographic"
                                            width={516}
                                            height={516}
                                        />
                                    </figure>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .video-gallery-image figure img:hover {
                    transform: scale(1.1);
                } 
                .video-gallery-image figure img {
                     transition: transform 0.3s ease-in-out;
                }
            `}</style>
        </div>
    )
}

export default PhotoGallery;
