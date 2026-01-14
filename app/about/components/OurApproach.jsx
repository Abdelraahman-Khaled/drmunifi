"use client"
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import FeaturesSection from '@/app/components/FeaturesSection'

const OurApproach = () => {
    const { language } = useLanguage();
    const t = translations.about[language].approach;

    return (
        <section className="our-approach-area ptb-100 pt-lg-0 pb-lg-0">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <FeaturesSection
                            title={t.sub}
                            subTitle={t.title}
                            desc={t.desc}
                            list={t.list}
                            className="approach-content"
                        />

                        <div className="approach-content pt-0">
                            <a href="https://api.whatsapp.com/send?phone=966535195519" target="_blank" className="btn btn-primary">
                                {t.btn}
                                <i className="flaticon-right-chevron"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="approach-image">
                            <Image
                                src="/assets/img/approach.webp"
                                alt="approach"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurApproach;
