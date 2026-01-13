"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const Navbar = () => {
    const { language, setLanguage } = useLanguage();

    const t = translations.navbar[language] || translations.navbar.ar;

    const handleLanguageChange = () => {
        const newLanguage = language === 'ar' ? 'en' : 'ar';
        setLanguage(newLanguage);
    };

    return (
        //  < !--Start Header Area-- >
        <header className="header-area">
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <ul className="header-contact-info">
                                <li><i className="fas fa-phone"></i> <Link dir="ltr" href={`tel:${t.phone.replace(/\s/g, '')}`}>{t.phone}</Link></li>
                                <li><i className="fa-regular fa-envelope"></i> <Link
                                    href={`mailto:${t.email}`}><span>{t.email}</span></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <div className="header-right-content">
                                <ul className="top-header-social">
                                    <li>
                                        <Link target="_blank" href="https://www.tiktok.com/@DrAlMunifi">
                                            <i className="fab fa-tiktok"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_blank" href="https://x.com/DrAlMunifi">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_blank" href="https://www.youtube.com/@DrAlMunifi">
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target="_blank" href="https://www.instagram.com/DrAlMunifi">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Start Navbar Area --> */}
            <div className="navbar-area">
                <div className="fovia-responsive-nav">
                    <div className="container">
                        <div className="fovia-responsive-menu">
                            <div className="logo">
                                <Link href={t.homeLink}>
                                    <Image src="/assets/img/logo.png" alt="logo" width={150} height={50} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fovia-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand" href={t.homeLink}>
                                <Image src="/assets/img/logo.png" alt="logo" width={150} height={50} />
                            </Link>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item active"><Link href={t.homeLink} className="nav-link">{t.home}</Link>
                                    </li>

                                    <li className="nav-item"><Link href={t.aboutLink} className="nav-link">{t.about}</Link>
                                    </li>

                                    <li className="nav-item"><Link href={t.operationsLink} className="nav-link">{t.operations}</Link>
                                    </li>

                                    <li className="nav-item"><Link href={t.blogLink} className="nav-link">{t.blog}</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href={t.contactLink} className="nav-link">{t.contact}</Link>
                                    </li>

                                    <li className="d-block d-lg-none nav-item">
                                        <Link className="nav-link" href={t.langLink} onClick={handleLanguageChange}>
                                            <Image src={t.langFlag} alt="flag" width={20} height={20} />
                                            <span style={{ marginLeft: language === 'ar' ? '0' : '8px', marginRight: language === 'ar' ? '8px' : '0' }}>{t.langSwitch}</span>
                                        </Link>
                                    </li>

                                    <li className="d-block d-lg-none w-fit-content nav-item">
                                        <Link href={t.contactLink} className="btn btn-primary nav-link">{t.consultation}</Link>
                                    </li>
                                </ul>

                                <div className="others-options">
                                    <Link href={t.langLink} onClick={handleLanguageChange}>
                                        <Image src={t.langFlag} alt="flag" width={20} height={20} />
                                    </Link>
                                    <Link href={t.contactLink} className="btn btn-primary">{t.consultation}</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- End Navbar Area --> */}
        </header>
    )
}

export default Navbar
