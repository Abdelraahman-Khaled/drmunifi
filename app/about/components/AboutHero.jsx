"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import FeaturesSection from '@/app/components/FeaturesSection'
import Skills from './Skills'

const AboutHero = () => {
    const { language } = useLanguage();
    const t = translations.about[language].hero;

    return (
        <section className="doctor-details-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="doctor-details-image">
                            <Image
                                src="/assets/img/about-img1.webp"
                                alt={t.name}
                                width={500}
                                height={600}
                                priority
                            />

                            <h3>{t.name}</h3>
                            <span>{t.title}</span>

                            <ul className="social">
                                <li><a target="_blank" href="https://www.tiktok.com/@DrAlMunifi"><i className="fab fa-tiktok"></i></a></li>
                                <li><a target="_blank" href="https://x.com/DrAlMunifi"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/@DrAlMunifi"><i className="fab fa-youtube"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/DrAlMunifi"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="doctor-details-desc">
                            <h2>{t.name}</h2>
                            <p>{t.desc1}</p>
                            <p>{t.desc2}</p>

                            <div className="signature-image">
                                <Image
                                    src="/assets/img/signature.webp"
                                    alt="signature"
                                    width={400}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Skills />
            </div>

            <div className="shape3">
                <Image
                    src="/assets/img/shape/2.png"
                    alt="shape"
                    width={100}
                    height={100}
                    className="wow fadeInLeft"
                />
            </div>
        </section>
    )
}

export default AboutHero;