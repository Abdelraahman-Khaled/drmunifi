"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import FeaturesSection from '@/app/components/FeaturesSection'

const HomeMission = () => {
    const { language } = useLanguage();
    const t = translations.home[language].mission;

    return (
        <section className="our-mission-area pb-lg-0 pt-lg-0 ptb-100">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <FeaturesSection
                            title={t.title}
                            subTitle={t.sub}
                            desc={t.desc}
                            cards={t.cards}
                            className="our-mission-content"
                        />
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="our-mission-image">
                            <Image
                                src="/assets/img/find-out.webp"
                                alt="اكتشف فوائد جراحة السمنة وابدأ رحلتك نحو التغيير"
                                width={500}
                                height={500}
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape3">
                <Image
                    src="/assets/img/shape/2.png"
                    alt="shape"
                    width={308}
                    height={567}
                />
            </div>
        </section>
    )
}

export default HomeMission;