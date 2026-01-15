"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const HomeFAQ = () => {
    const { language } = useLanguage();
    const t = translations.home[language].faq;
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        // Matching indexx.html structure line 775
        <section className="faq-area">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="faq-image">
                            <Image
                                src="/assets/img/our-work.webp"
                                alt="image"
                                width={800} // Approximate width based on usage
                                height={600}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="faq-accordion">
                            <span className="sub-title">{t.subTitle}</span>
                            <h2>{t.title}</h2>

                            <ul className="accordion">
                                {t.items.map((item, index) => (
                                    <li className="accordion-item" key={index}>
                                        <a
                                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                                            href="javascript:void(0)"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleAccordion(index);
                                            }}
                                        >
                                            <i className="fas fa-plus"></i>
                                            {item.question}
                                        </a>

                                        <div
                                            className="accordion-content"
                                            style={{
                                                display: 'block',
                                                maxHeight: activeIndex === index ? '500px' : '0',
                                                overflow: 'hidden',
                                                transition: 'max-height 0.4s ease-out, padding 0.4s ease',
                                                paddingTop: activeIndex === index ? '15px' : '0',
                                                paddingBottom: activeIndex === index ? '15px' : '0',
                                                opacity: activeIndex === index ? 1 : 0,
                                                transitionProperty: 'max-height, padding, opacity'
                                            }}
                                        >
                                            <p className="mb-0">{item.answer}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFAQ;
