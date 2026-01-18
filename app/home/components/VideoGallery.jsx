"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const VideoGallery = () => {
    const { language } = useLanguage();
    const t = translations.home[language].videoGallery;
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = (e, id) => {
        e.preventDefault();
        setActiveVideo(id);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

    return (
        <div className="page-video-gallery ptb-100 bg-f4f9fd">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{t.title}</span>
                    <h2>{t.subTitle}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row justify-content-center">
                    {t.videos.map((video, index) => (
                        <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center" key={index}>
                            <div
                                className="video-gallery-image"
                                data-cursor-text={language === 'ar' ? 'تشغيل' : 'Play'}
                            >
                                <a
                                    href="#!"
                                    className="d-block"
                                    onClick={(e) => openVideo(e, video.id)}
                                >
                                    <figure>
                                        <Image
                                            src={video.thumbnail}
                                            alt="video"
                                            width={400}
                                            height={250}
                                        />
                                    </figure>
                                </a>
                            </div>
                        </div>
                    ))}

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="more-services-btn mt-4 text-center">
                            <a
                                href="https://www.youtube.com/@DrAlMunifi"
                                target="_blank"
                                className="btn btn-primary"
                                rel="noreferrer"
                            >
                                {t.btn}
                                <i className="flaticon-right-chevron"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="video-modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75"
                    style={{ zIndex: 1050 }}
                    onClick={closeVideo}
                >
                    <div className="video-container position-relative" style={{ width: '90%', maxWidth: '900px' }}>
                        <button
                            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                            onClick={closeVideo}
                            style={{ zIndex: 1060 }}
                        ></button>
                        <div className="ratio ratio-16x9">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideoGallery;
