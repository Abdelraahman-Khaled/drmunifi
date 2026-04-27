"use client"
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../context/translation'

const HeroSection = ({ title, subTitle, subTitleLink, number }) => {
    const { language } = useLanguage();
    const navT = translations.navbar[language] || translations.navbar.ar;

    return (
        <section className={`page-title-area page-title-bg${number} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>
            <div className="d-table relative z-10">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content text-center">
                            <h1 className="wow animate__animated animate__fadeInDown" style={{ textWrap: 'balance' }}>{title}</h1>
                            <ul className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                                <li>
                                    <Link href={navT.homeLink} className="hover:text-primary transition-colors">
                                        {navT.home}
                                    </Link>
                                </li>
                                {subTitleLink && subTitle && subTitle !== navT.home && (
                                    <li className='px-1 before:content-["/"] before:mx-2 before:opacity-50' aria-hidden="false">
                                        <span className="sr-only">/</span>
                                        <Link href={subTitleLink} className="hover:text-primary transition-colors">
                                            {subTitle}
                                        </Link>
                                    </li>
                                )}
                                <li className='px-1 before:content-["/"] before:mx-2 before:opacity-50 opacity-80' aria-current="page">
                                    <span className="sr-only">/</span>
                                    {title}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Decorative shape */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180" aria-hidden="true">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(130%+1.3px)] h-[60px] fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default HeroSection