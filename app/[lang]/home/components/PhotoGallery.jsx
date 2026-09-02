"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../../../../context/LanguageContext'
import { translations } from '../../../../context/translation'

const PhotoGallery = () => {
    const { language } = useLanguage();
    const t = translations.home[language].photoGallery;
    const [active, setActive] = useState(null);

    const close = useCallback(() => setActive(null), []);

    // Close on Escape, and lock background scrolling while the viewer is open.
    useEffect(() => {
        if (active === null) return;

        const onKeyDown = (e) => { if (e.key === 'Escape') close(); };
        const previousOverflow = document.body.style.overflow;

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [active, close]);

    const blockContextMenu = (e) => e.preventDefault();
    const item = active === null ? null : t.items[active];

    return (
        <div className="page-gallery ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{t.title}</span>
                    <h2>{t.subTitle}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row justify-content-center">
                    {t.items.map((entry, index) => (
                        <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center" key={index}>
                            <div className="video-gallery-image" data-cursor-text={language === 'ar' ? 'عرض' : 'View'}>
                                <button
                                    type="button"
                                    className="infographic-trigger"
                                    style={{ maxWidth: "300px" }}
                                    onClick={() => setActive(index)}
                                    aria-label={language === 'ar' ? 'عرض الإنفوجرافيك' : 'View infographic'}
                                >
                                    <figure>
                                        <Image
                                            src={entry.thumb}
                                            alt="infographic"
                                            width={516}
                                            height={516}
                                        />
                                    </figure>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {item && (
                <div
                    className="infographic-viewer"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t.subTitle}
                    onClick={close}
                    onContextMenu={blockContextMenu}
                >
                    <button
                        type="button"
                        className="infographic-close"
                        onClick={close}
                        aria-label={language === 'ar' ? 'إغلاق' : 'Close'}
                    >
                        &times;
                    </button>

                    <div className="infographic-scroll" onClick={(e) => e.stopPropagation()}>
                        <div className="infographic-frame">
                            {/* Plain <img>: next/image would proxy this through the
                                optimizer, which cannot pass the route's same-origin check. */}
                            <img
                                src={item.pdf}
                                alt="infographic"
                                draggable="false"
                                onContextMenu={blockContextMenu}
                                onDragStart={blockContextMenu}
                            />
                            {/* Transparent shield: intercepts long-press / right-click
                                so the browser never targets the image element itself. */}
                            <div className="infographic-shield" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .infographic-trigger {
                    padding: 0;
                    border: 0;
                    background: none;
                    cursor: pointer;
                    display: block;
                }
                .video-gallery-image figure img:hover {
                    transform: scale(1.1);
                }
                .video-gallery-image figure img {
                    transition: transform 0.3s ease-in-out;
                }

                .infographic-viewer {
                    position: fixed;
                    inset: 0;
                    z-index: 10000;
                    background: rgba(11, 11, 11, 0.92);
                    display: flex;
                    justify-content: center;
                    animation: infographic-fade 0.2s ease-out;
                }
                @keyframes infographic-fade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .infographic-close {
                    position: fixed;
                    top: 14px;
                    right: 20px;
                    z-index: 2;
                    width: 44px;
                    height: 44px;
                    border: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.14);
                    color: #fff;
                    font-size: 30px;
                    line-height: 1;
                    cursor: pointer;
                    transition: background 0.2s ease;
                }
                .infographic-close:hover {
                    background: rgba(255, 255, 255, 0.28);
                }

                .infographic-scroll {
                    width: 100%;
                    max-width: 900px;
                    overflow-y: auto;
                    overscroll-behavior: contain;
                    -webkit-overflow-scrolling: touch;
                    padding: 60px 16px 40px;
                }

                .infographic-frame {
                    position: relative;
                    line-height: 0;
                }
                .infographic-frame img {
                    width: 100%;
                    height: auto;
                    display: block;
                    border-radius: 6px;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-touch-callout: none;
                    pointer-events: none;
                }
                .infographic-shield {
                    position: absolute;
                    inset: 0;
                    background: transparent;
                }

                @media (max-width: 767px) {
                    .infographic-scroll { padding: 60px 10px 30px; }
                    .infographic-close { top: 10px; right: 10px; }
                }
            `}</style>
        </div>
    )
}

export default PhotoGallery;
