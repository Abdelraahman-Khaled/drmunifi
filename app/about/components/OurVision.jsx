"use client"
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const OurVision = () => {
    const { language } = useLanguage();
    const t = translations.about[language].vision;

    return (
        <section className="our-vision-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                        <div className="single-vision-box">
                            <div className="icon">
                                <i className="fi fi-rs-diamond"></i>
                            </div>

                            <h3>{t.values.title}</h3>
                            <p>{t.values.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                        <div className="single-vision-box">
                            <div className="icon">
                                <i className="fi fi-rs-paper-plane"></i>
                            </div>

                            <h3>{t.mission.title}</h3>
                            <p>{t.mission.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                        <div className="single-vision-box">
                            <div className="icon">
                                <i className="fi fi-rr-vision"></i>
                            </div>

                            <h3>{t.vision.title}</h3>
                            <p>{t.vision.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVision;
