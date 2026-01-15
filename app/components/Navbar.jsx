"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const t = translations.navbar[language] || translations.navbar.ar;

    const handleLanguageChange = () => {
        toggleLanguage();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        if (path === '/' || path === '/en') {
            return pathname === path;
        }
        return pathname.startsWith(path);
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
            <div className={`navbar-area ${isSticky ? 'is-sticky' : ''}`}>
                <div className="fovia-responsive-nav">
                    <div className="container">
                        <div className="fovia-responsive-menu">
                            <div className="logo">
                                <Link href={t.homeLink}>
                                    <Image src="/assets/img/logo.png" alt="logo" width={150} height={50} />
                                </Link>
                            </div>

                            <button
                                className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
                                type="button"
                                onClick={toggleMenu}
                                aria-controls="navbarSupportedContent"
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle navigation"
                                style={{ position: 'absolute', right: language === 'ar' ? 'auto' : '0', left: language === 'ar' ? '0' : 'auto', top: '50%', transform: 'translateY(-50%)' }}
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="fovia-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand" href={t.homeLink}>
                                <Image src="/assets/img/logo.png" alt="logo" width={150} height={50} />
                            </Link>

                            <button
                                className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
                                type="button"
                                onClick={toggleMenu}
                                aria-controls="navbarSupportedContent"
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className={`nav-item ${isActive(t.homeLink) ? 'active' : ''}`}>
                                        <Link href={t.homeLink} className={`nav-link ${isActive(t.homeLink) ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
                                    </li>

                                    <li className={`nav-item ${isActive(t.aboutLink) ? 'active' : ''}`}>
                                        <Link href={t.aboutLink} className={`nav-link ${isActive(t.aboutLink) ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.about}</Link>
                                    </li>

                                    <li className={`nav-item ${isActive(t.operationsLink) ? 'active' : ''}`}>
                                        <Link href={t.operationsLink} className={`nav-link ${isActive(t.operationsLink) ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.operations}</Link>
                                    </li>

                                    <li className={`nav-item ${isActive(t.blogLink) ? 'active' : ''}`}>
                                        <Link href={t.blogLink} className={`nav-link ${isActive(t.blogLink) ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.blog}</Link>
                                    </li>

                                    <li className={`nav-item ${isActive(t.contactLink) ? 'active' : ''}`}>
                                        <Link href={t.contactLink} className={`nav-link ${isActive(t.contactLink) ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>{t.contact}</Link>
                                    </li>

                                    <li className="d-block d-lg-none nav-item">
                                        <div className="nav-link" style={{ cursor: 'pointer' }} onClick={() => { handleLanguageChange(); setIsMenuOpen(false); }}>
                                            <Image src={t.langFlag} alt="flag" width={20} height={20} />
                                            <span style={{ marginLeft: language === 'ar' ? '0' : '8px', marginRight: language === 'ar' ? '8px' : '0' }}>{t.langSwitch}</span>
                                        </div>
                                    </li>

                                    <li className="d-block d-lg-none w-fit-content nav-item">
                                        <Link href={t.contactLink} className="btn btn-primary nav-link" onClick={() => setIsMenuOpen(false)}>{t.consultation}</Link>
                                    </li>
                                </ul>

                                <div className="others-options">
                                    <div style={{ cursor: 'pointer', display: 'inline-block', marginInlineEnd: '15px' }} onClick={handleLanguageChange}>
                                        <Image src={t.langFlag} alt="flag" width={20} height={20} />
                                    </div>
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
