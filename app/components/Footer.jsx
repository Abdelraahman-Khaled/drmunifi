"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const Footer = () => {
    const { language } = useLanguage();
    const t = translations.footer[language] || translations.footer.ar;
    const navT = translations.navbar[language] || translations.navbar.ar;

    return (
        <>
            {/* <!-- Start Footer Area --> */}
            <section className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href={navT.homeLink}>
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
                                    <li><Link href={navT.homeLink}>{navT.home}</Link></li>
                                    <li><Link href={navT.aboutLink}>{navT.about}</Link></li>
                                    <li><Link href={navT.blogLink}>{navT.blog}</Link></li>
                                    <li><Link href="#calc">{t.bmiCalc}</Link></li>
                                    <li><Link href="#feedbacks">{t.reviews}</Link></li>
                                    <li><Link href={navT.contactLink}>{navT.contact}</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>{t.operations}</h3>

                                <ul className="links-list">
                                    {t.operationList.map((op, index) => (
                                        <li key={index}>
                                            <Link href={op.link}>{op.name}</Link>
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
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>{t.copyright}</p>
                    </div>
                </div>
            </section>
            {/* <!-- End Footer Area --> */}

            <div className="go-top">
                <i className="fas fa-chevron-up"></i>
            </div>
        </>
    )
}

export default Footer;
