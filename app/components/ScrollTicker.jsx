"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

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
                        alt={item}
                        width={20}
                        height={20}
                    />
                    {item}
                </span>
            ))}
        </>
    );

    return (
        <div className="our-scrolling-ticker">
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
        </div>
    )
}

export default ScrollTicker;