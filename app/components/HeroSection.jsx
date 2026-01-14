"use client"
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const HeroSection = ({ title, subTitle, subTitleLink, number }) => {
    const { language } = useLanguage();
    const navT = translations.navbar[language] || translations.navbar.ar;

    return (
        <section className={`page-title-area page-title-bg${number}`}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>{title}</h2>
                            <ul>
                                <li><Link href={navT.homeLink}>{navT.home}</Link></li>
                                {
                                    subTitleLink && (
                                        <li className='px-1'><Link href={subTitleLink}>{subTitle}</Link></li>
                                    )
                                }
                                <li className='px-1'>{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection