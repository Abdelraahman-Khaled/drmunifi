"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const ContactForm = () => {
    const { language } = useLanguage();
    const t = translations.contact[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        msg_subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Reset form or handle API call here
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
                                <form id="contactForm" onSubmit={handleSubmit}>
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
                                                    name="phone_number"
                                                    id="phone_number"
                                                    required
                                                    className="form-control"
                                                    placeholder={t.phone}
                                                    value={formData.phone_number}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="msg_subject"
                                                    id="msg_subject"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.subject}
                                                    value={formData.msg_subject}
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