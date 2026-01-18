"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FeaturesSection from '@/app/components/FeaturesSection'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const HomeAbout = () => {
    const { language } = useLanguage();
    const t = translations.about[language].hero;
    const homeT = translations.home[language].about;
    const isAr = language === 'ar';

    return (
        <section className="about-area py-lg-0 ptb-100">
            <div className="row align-items-center m-0">
                <div className="col-lg-6 col-md-12 p-0">
                    <Image
                        src="/assets/img/about-img1.webp"
                        className="w-100"
                        alt="Dr AlMunifi"
                        width={933}
                        height={970}
                    />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about-content ">
                        <FeaturesSection
                            title={homeT.title}
                            subTitle={homeT.sub}
                            list={t.skillsList.slice(0, 7)} // Display first 7 skills on home page
                            className=""
                        />

                        <Link href={"/about"} className="btn btn-primary">
                            {homeT.btn}
                            <i className="flaticon-right-chevron"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout;