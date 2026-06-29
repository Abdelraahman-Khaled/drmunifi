"use client"
import React from 'react'
import { useLanguage } from '../../../../context/LanguageContext'
import { translations } from '../../../../context/translation'

const OurVision = () => {
    const { language } = useLanguage();
    const t = translations.about[language].vision;

    return (
        <section className="our-vision-area ptb-100">
            <h2 className="sr-only">{language === 'ar' ? 'القيم والرسالة والرؤية' : 'Values, Mission and Vision'}</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                        <div className="single-vision-box">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false">
                                    <path d="M6 2h12l4 6-10 14L2 8 6 2zm1.2 2L4.3 8h4.2l1.5-4H7.2zm4.8 0-1.5 4h3l-1.5-4zm2.8 0 1.5 4h4.2l-2.9-4h-2.8zM5 10l5.2 7.3L8.5 10H5zm6 0 1 6 1-6h-2zm4.5 0-1.7 7.3L19 10h-3.5z" />
                                </svg>
                            </div>

                            <h3 style={{ textWrap: 'balance' }}>{t.values.title}</h3>
                            <p>{t.values.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                        <div className="single-vision-box">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false">
                                    <path d="M2.3 2.3 22 11 2.3 19.7 2 13l13-2-13-2 .3-6.7z" />
                                </svg>
                            </div>

                            <h3 style={{ textWrap: 'balance' }}>{t.mission.title}</h3>
                            <p>{t.mission.desc}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                        <div className="single-vision-box">
                            <div className="icon">
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false">
                                    <path d="M12 5C5 5 1 12 1 12s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z" />
                                </svg>
                            </div>

                            <h3 style={{ textWrap: 'balance' }}>{t.vision.title}</h3>
                            <p>{t.vision.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVision;
