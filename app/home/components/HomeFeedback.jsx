"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const HomeFeedback = () => {
    const { language } = useLanguage();
    const t = translations.home[language].feedback;
    const rootRef = React.useRef(null);

    useEffect(() => {
        let isMounted = true;
        let checkInterval = null;

        const checkDependencies = () => {
            if (typeof window !== 'undefined' && window.$ && window.$.fn && window.$.fn.slick) {
                // Dependencies loaded, clear interval and init
                if (checkInterval) clearInterval(checkInterval);
                initSliders(window.$);
            }
        };

        const initSliders = ($) => {
            if (!isMounted || !rootRef.current) return;

            const $container = $(rootRef.current);
            const $imagesSlider = $container.find(".feedback-slides .client-feedback>div");
            const $thumbnailsSlider = $container.find(".client-thumbnails>div");

            // Check if elements exist
            if ($imagesSlider.length === 0 || $thumbnailsSlider.length === 0) return;

            // Prevent duplicate initialization
            if ($imagesSlider.hasClass('slick-initialized')) {
                $imagesSlider.slick('unslick');
            }
            if ($thumbnailsSlider.hasClass('slick-initialized')) {
                $thumbnailsSlider.slick('unslick');
            }

            const $prevArrow = $container.find('.client-feedback .prev-arrow');
            const $nextArrow = $container.find('.client-feedback .next-arrow');

            // Images Options
            $imagesSlider.slick({
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: 'linear',
                fade: true,
                rtl: language === 'ar',
                autoplay: true,
                draggable: true,
                asNavFor: $thumbnailsSlider,
                prevArrow: $prevArrow,
                nextArrow: $nextArrow
            });

            // Thumbnails Options
            $thumbnailsSlider.slick({
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                cssEase: 'linear',
                autoplay: true,
                centerMode: true,
                draggable: false,
                rtl: language === 'ar',
                focusOnSelect: true,
                asNavFor: $imagesSlider,
                prevArrow: $container.find('.client-thumbnails .prev-arrow'),
                nextArrow: $container.find('.client-thumbnails .next-arrow'),
            });
        };

        // Check immediately
        checkDependencies();

        // Check periodically (every 100ms) in case script loads late
        checkInterval = setInterval(checkDependencies, 100);

        // Stop checking after 5 seconds to avoid infinite loop
        const timeout = setTimeout(() => {
            if (checkInterval) clearInterval(checkInterval);
        }, 5000);

        return () => {
            isMounted = false;
            if (checkInterval) clearInterval(checkInterval);
            clearTimeout(timeout);

            // Clean up Slick instance on unmount
            if (typeof window !== 'undefined' && window.$ && window.$.fn && window.$.fn.slick && rootRef.current) {
                const $ = window.$;
                const $container = $(rootRef.current);
                const $imagesSlider = $container.find(".feedback-slides .client-feedback>div");
                const $thumbnailsSlider = $container.find(".client-thumbnails>div");
                if ($imagesSlider.length > 0 && $imagesSlider.hasClass('slick-initialized')) {
                    $imagesSlider.slick('unslick');
                }
                if ($thumbnailsSlider.length > 0 && $thumbnailsSlider.hasClass('slick-initialized')) {
                    $thumbnailsSlider.slick('unslick');
                }
            }
        };
    }, [language, t.items]);

    return (
        <section id="feedbacks" className="feedback-area ptb-100 bg-f4f9fd" ref={rootRef} key={language}>
            <div className="container">
                <div className="section-title">
                    <span>{t.title}</span>
                    <h2>{t.subTitle}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="feedback-slides">
                    <div className="client-thumbnails">
                        <div>
                            {t.items.map((item, index) => (
                                <div className="item" key={`thumb-${index}`}>
                                    <div className="img-fill">
                                        <Image
                                            src={item.image}
                                            alt="client"
                                            width={30}
                                            height={30}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="client-feedback">
                        <div>
                            {t.items.map((item, index) => (
                                <div className="item" key={`feed-${index}`}>
                                    <div className="single-feedback">
                                        <h3>{item.name}</h3>
                                        <p>"{item.feedback}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Arrows are here inside .client-feedback, matching indexx.html */}
                        <button className="prev-arrow slick-arrow">
                            <i className={language === 'ar' ? 'flaticon-arrow-pointing-to-right' : 'flaticon-left-arrow'}></i>
                        </button>

                        <button className="next-arrow slick-arrow">
                            <i className={language === 'ar' ? 'flaticon-left-arrow' : 'flaticon-arrow-pointing-to-right'}></i>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFeedback;
