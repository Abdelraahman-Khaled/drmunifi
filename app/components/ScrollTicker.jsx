"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../context/translation'

const ScrollTicker = () => {
    const { language } = useLanguage();
    const items = translations.ticker[language] || translations.ticker.ar;

    // We repeat the items to ensure a continuous scroll effect
    const TickerItems = () => (
        <>
            {items.map((item, index) => (
                <span key={index}>
                    <Image
                        src="/assets/img/asterisk-icon.svg"
                        alt=""
                        width={20}
                        height={20}
                        aria-hidden="true"
                    />
                    {item}
                </span>
            ))}
        </>
    );

    return (
        <section className="our-scrolling-ticker" aria-label={language === 'ar' ? 'شريط التخصصات' : 'Specialties Ticker'}>
            <div className="scrolling-ticker-box">
                <div className="scrolling-content">
                    <TickerItems />
                    <TickerItems />
                    <TickerItems />
                </div>

                <div className="scrolling-content">
                    <TickerItems />
                    <TickerItems />
                    <TickerItems />
                </div>
            </div>
        </section>
    )
}

export default ScrollTicker;