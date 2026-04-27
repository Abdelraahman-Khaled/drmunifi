"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../context/translation'
import { getOperations } from '../api/operations'

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        const fetchOperations = async () => {
            try {
                const data = await getOperations();
                setOperations(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to fetch operations for navbar:", error);
            }
        };
        fetchOperations();
    }, []);

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

    useEffect(() => {
        // Event delegation for mobile menu language switcher
        const handleMobileLangClick = (e) => {
            const switcher = e.target.closest('.mobile-lang-switcher');
            if (switcher) {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange();
            }
        };

        const $ = window.jQuery;

        // Re-initialize MeanMenu to update translations
        if ($ && $.fn.meanmenu) {
            $('.mean-bar').remove();
            $('.mean-menu').meanmenu({
                meanScreenWidth: "991"
            });
        }

        document.body.addEventListener('click', handleMobileLangClick);
        return () => {
            document.body.removeEventListener('click', handleMobileLangClick);
        };
    }, [language]); // Depend on language context

    const t = translations.navbar[language] || translations.navbar.ar;

    const handleLanguageChange = () => {
        toggleLanguage();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLocalizedPath = (path) => {
        // If path already starts with /ar or /en, return it
        if (path.startsWith('/ar') || path.startsWith('/en')) return path;
        return `/${language}${path === '/' ? '' : path}`;
    };

    const isActive = (path) => {
        const localizedPath = getLocalizedPath(path);
        if (path === '/' || path === '') {
            return pathname === `/${language}` || pathname === `/${language}/`;
        }
        return pathname.startsWith(localizedPath);
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
                                    <li>
                                        <Link target="_blank" href={t.whatsapp}>
                                            <i className="fab fa-whatsapp"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`navbar-area ${isSticky ? 'is-sticky' : ''}`}>
                <div className="fovia-responsive-nav">
                    <div className="container">
                        <div className="fovia-responsive-menu">
                            <div className="logo">
                                <Link href={getLocalizedPath('/')}>
                                    <Image src="/assets/img/logo.png" alt="logo" width={150} height={50} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fovia-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand" href={getLocalizedPath('/')}>
                                <Image src="/assets/img/logo.png" alt="logo" width={150} height={50} />
                            </Link>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                                        <Link href={getLocalizedPath('/')} className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.home}</Link>
                                    </li>

                                    <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                                        <Link href={getLocalizedPath('/about')} className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.about}</Link>
                                    </li>

                                    <li className={`nav-item ${isActive('/types-of-operations') ? 'active' : ''}`}>
                                        <Link href={getLocalizedPath('/types-of-operations')} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                                            {t.operations} <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px', marginInlineStart: '5px' }}></i>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            {operations.map((op) => (
                                                <li key={op.id} className="nav-item">
                                                    <Link
                                                        href={getLocalizedPath(`/operation-details/${language === 'ar' ? (op.slug_ar || op.slug) : (op.slug || op.slug_ar)}`)}
                                                        className="nav-link"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {language === 'ar' ? (op.title_ar || op.title) : (op.title_en || op.title_ar)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    <li className={`nav-item ${isActive('/blogs') ? 'active' : ''}`}>
                                        <Link href={getLocalizedPath('/blogs')} className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.blog}</Link>
                                    </li>

                                    <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                                        <Link href={getLocalizedPath('/contact')} className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.contact}</Link>
                                    </li>

                                    <li className="d-block d-lg-none nav-item">
                                        <div className="nav-link mobile-lang-switcher" style={{ cursor: 'pointer' }} onClick={() => { handleLanguageChange(); setIsMenuOpen(false); }}>
                                            <Image src={t.langFlag} alt="flag" width={30} height={30} />
                                            <span style={{ marginLeft: language === 'ar' ? '0' : '8px', marginRight: language === 'ar' ? '8px' : '0' }}>{t.langSwitch}</span>
                                        </div>
                                    </li>

                                    <li className="d-block d-lg-none w-fit-content nav-item">
                                        <Link href={getLocalizedPath('/contact')} className="btn btn-primary nav-link" onClick={() => setIsMenuOpen(false)}>{t.consultation}</Link>
                                    </li>
                                </ul>

                                <div className="others-options">
                                    <div style={{ cursor: 'pointer', display: 'inline-block', marginInlineEnd: '15px' }} onClick={handleLanguageChange}>
                                        <Image src={t.langFlag} alt="flag" width={30} height={30} />
                                    </div>
                                    <Link href={getLocalizedPath('/contact')} className="btn btn-primary">{t.consultation}</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Navbar
