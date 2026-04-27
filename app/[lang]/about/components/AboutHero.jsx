"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../../../../context/LanguageContext'
import { translations } from '../../../../context/translation'
import FeaturesSection from '../../../components/FeaturesSection'
import Skills from './Skills'

const AboutHero = () => {
    const { language } = useLanguage();
    const t = translations.about[language].hero;

    return (
        <section className="doctor-details-area ptb-100">
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

                            <strong className="h3 d-block">{t.name}</strong>
                            <span>{t.title}</span>

                            <ul className="social">
                                <li><a target="_blank" href="https://www.tiktok.com/@DrAlMunifi" aria-label="TikTok"><i className="fab fa-tiktok" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://x.com/DrAlMunifi" aria-label="X (Twitter)"><i className="fa-brands fa-x-twitter" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/@DrAlMunifi" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/DrAlMunifi" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=966535195519" aria-label="WhatsApp"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="doctor-details-desc">
                            <h2 style={{ textWrap: 'balance' }}>{t.name}</h2>
                            <p>{t.desc1}</p>
                            <p>{t.desc2}</p>

                            <div className="signature-image">
                                <Image
                                    src="/assets/img/signature.webp"
                                    alt="signature"
                                    width={400}
                                    height={50}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Skills />
            </div>

            <div className="shape3" aria-hidden="true">
                <Image
                    src="/assets/img/shape/2.png"
                    alt="shape"
                    width={100}
                    height={100}
                    className="wow fadeInLeft"
                    loading="lazy"
                />
            </div>
        </section>
    )
}

export default AboutHero;