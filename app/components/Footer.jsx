"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../context/translation'
import { getOperations } from '../api/operations'

const Footer = () => {
    const { language } = useLanguage();
    const t = translations.footer[language] || translations.footer.ar;
    const navT = translations.navbar[language] || translations.navbar.ar;
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        const fetchOperations = async () => {
            try {
                const data = await getOperations();
                setOperations(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to fetch operations for footer:", error);
            }
        };
        fetchOperations();
    }, []);

    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setShowGoTop(true);
            } else {
                setShowGoTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const getLocalizedPath = (path) => {
        if (path.startsWith('http') || path.startsWith('#')) return path;
        // If path already starts with /ar or /en, return it
        if (path.startsWith('/ar') || path.startsWith('/en')) return path;
        return `/${language}${path === '/' ? '' : path}`;
    };

    return (
        <>
            {/* <!-- Start Footer Area --> */}
            <section className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href={getLocalizedPath('/')}>
                                        <Image src="/assets/img/logo.png" alt="logo" width={378} height={108} />
                                    </Link>
                                    <p>{t.aboutText}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>{t.quickLinks}</h3>
                                <ul className="departments-list">
                                    <li><Link href={getLocalizedPath('/')}>{navT.home}</Link></li>
                                    <li><Link href={getLocalizedPath('/about')}>{navT.about}</Link></li>
                                    <li><Link href={getLocalizedPath('/types-of-operations')}>{navT.operations}</Link></li>
                                    <li><Link href={getLocalizedPath('/blogs')}>{navT.blog}</Link></li>
                                    <li><Link href={getLocalizedPath('/contact')}>{navT.contact}</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>{t.operations}</h3>

                                <ul className="links-list">
                                    {operations.slice(0, 6).map((op) => (
                                        <li key={op.id}>
                                            <Link href={getLocalizedPath(`/operation-details/${language === 'ar' ? (op.slug_ar || op.slug) : (op.slug || op.slug_ar)}`)}>
                                                {language === 'ar' ? (op.title_ar || op.title) : (op.title_en || op.title_ar)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>{t.socialMedia}</h3>
                                <ul className="social">
                                    <li><Link target="_blank" href="https://www.tiktok.com/@DrAlMunifi"><i
                                        className="fab fa-tiktok"></i></Link></li>
                                    <li>
                                        <Link target="_blank" href="https://x.com/DrAlMunifi">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </Link>
                                    </li>
                                    <li><Link target="_blank" href="https://www.youtube.com/@DrAlMunifi"><i
                                        className="fab fa-youtube"></i></Link></li>
                                    <li><Link target="_blank" href="https://www.instagram.com/DrAlMunifi"><i
                                        className="fab fa-instagram"></i></Link></li>
                                    <li><Link target="_blank" href={navT.whatsapp}><i
                                        className="fab fa-whatsapp"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>{t.copyright}</p>
                        <p>
                            {t.designedByPrefix}{' '}
                            <Link href="https://mila-knight.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7', fontWeight: 600 }}>
                                {t.designedByLink}
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* <!-- End Footer Area --> */}

            <div 
                className={`go-top ${showGoTop ? 'active' : ''}`}
                onClick={scrollToTop}
                style={{ cursor: 'pointer' }}
            >
                <i className="fas fa-chevron-up"></i>
            </div>
        </>
    )
}

export default Footer;
