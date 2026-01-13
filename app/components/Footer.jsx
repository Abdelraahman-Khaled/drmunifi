import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            {/* <!-- Start Footer Area --> */}
            <section className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="./"><Image src="assets/img/logo.png" alt="image" width={108} height={378} /></Link>
                                    <p>
                                        بخبرة الدكتور عبد الله المنيفي، استعد لتحقيق التحول الذي طالما حلمت به، اختر جراحة
                                        السمنة المثالية لك وابدأ رحلتك نحو حياة صحية وجسم مثالي.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>الروابط السريعة</h3>
                                <ul className="departments-list">
                                    <li><Link href="./">الرئيسية</Link></li>
                                    <li><Link href="about.html">عن الدكتور</Link></li>
                                    <li><Link href="blogs.html">المدونة</Link></li>
                                    <li><Link href="#calc">حساب مؤشر كتلة الجسم</Link></li>
                                    <li><Link href="#feedbacks">آراء العملاء</Link></li>
                                    <li><Link href="contact.html">تواصل معنا</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>العمليات</h3>

                                <ul className="links-list">
                                    <li><Link href="operation-details/تكميم-المعدة.html">تكميم المعدة</Link></li>
                                    <li><Link href="operation-details/عملية-استئصال-المرارة.html">عملية استئصال المرارة</Link>
                                    </li>
                                    <li><Link href="operation-details/تحويل-المسار-المصغر.html">تحويل المسار المصغر</Link></li>
                                    <li><Link href="operation-details/إجراءات-إصلاح-الفتق-بالمنظار.html">إجراءات إصلاح الفتقبالمنظار</Link></li>
                                    <li><Link href="operation-details/إصلاح-الانفصال-العضلي.html">إصلاح الانفصال العضلي</Link></li>
                                    <li><Link href="operation-details/تحويل-مسار-المعدة-الكلاسيكي.html">تحويل مسار
                                        المعدة الكلاسيكي</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>التواصل الاجتماعي</h3>
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
                        <p>جميع الحقوق محفوظة © 2026 للدكتور عبدالله المنيفي.</p>
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

export default Footer