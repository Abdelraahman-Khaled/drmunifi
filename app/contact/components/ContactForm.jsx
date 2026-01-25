"use client"
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const { language } = useLanguage();
    const t = translations.contact[language];
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSubmitted(true);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setError(error.text);
                },
            );
    };

    return (
        <section className="contact-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>{t.title}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="contact-form">
                            {submitted ? (
                                <div className="alert alert-success" role="alert">
                                    {t.success}
                                </div>
                            ) : (
                                <form id="contactForm" ref={form} onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.name}
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.email}
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    required
                                                    className="form-control"
                                                    placeholder={t.phone}
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.subject}
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    cols="30"
                                                    rows="6"
                                                    required
                                                    placeholder={t.message}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">
                                                {t.send}
                                                <i className="flaticon-right-chevron"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="contact-info">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <span>{t.emailLabel}</span>
                                    <a href="mailto:support@almunifi.com"><span>support@almunifi.com</span></a>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="fas fa-phone-volume"></i>
                                    </div>
                                    <span>{t.phoneLabel}</span>
                                    <a dir="ltr" style={{ textAlign: language === 'ar' ? 'right' : 'left' }} href="tel:966535195519">+966 53 519 5519</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-map">
                <Image
                    src="/assets/img/bg-map.png"
                    alt="map bg"
                    width={1000}
                    height={600}
                />
            </div>
        </section>
    )
}

export default ContactForm;