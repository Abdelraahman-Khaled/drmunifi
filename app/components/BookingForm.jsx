"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../context/translation'
import { getOperations } from '../api/operations'

const BookingForm = () => {
    const { language } = useLanguage();
    const t = translations.bookingForm[language] || translations.bookingForm.ar;
    const form = useRef();

    const operations = translations.fixedOperations[language] || translations.fixedOperations.ar;
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        operation: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subject: `Request for Appointment: ${formData.operation || 'General Enquiry'}`
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    phone: '',
                    operation: '',
                    message: ''
                });
            } else {
                const data = await response.json();
                setError(data.error || t.error);
            }
        } catch (err) {
            console.error('FAILED...', err);
            setError(t.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="booking-area ptb-100 bg-f4f9fd">
            <div className="container">
                <div className="section-title">
                    <h2>{t.title}</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="booking-form">
                            {submitted ? (
                                <div className="alert alert-success" role="alert">
                                    {t.success}
                                </div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit}>
                                    <input type="hidden" name="subject" value={`Request for Appointment: ${formData.operation || 'General Enquiry'}`} />
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>{t.name}</label>
                                                <input
                                                    type="text"
                                                    name="name"
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
                                                <label>{t.phone}</label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    className="form-control"
                                                    required
                                                    placeholder={t.phone}
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>{t.operation}</label>
                                                <select
                                                    name="operation"
                                                    className="form-control"
                                                    required
                                                    value={formData.operation}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">{t.selectOperation}</option>
                                                    {operations.map((op, index) => (
                                                        <option key={index} value={op.title}>
                                                            {op.title}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>{t.message}</label>
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    cols="30"
                                                    rows="5"
                                                    required
                                                    placeholder={t.message}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12 text-center">
                                            <button type="submit" className="btn btn-primary px-5" disabled={loading}>
                                                {loading ? t.loading : t.send}
                                                <i className="flaticon-right-chevron "></i>
                                            </button>
                                        </div>
                                    </div>
                                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .booking-form {
                    background: #fff;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #030b58;
                }
                .form-control {
                    height: 50px;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    padding: 10px 20px;
                    width: 100%;
                    appearance: auto !important;
                    -webkit-appearance: auto !important;
                    -moz-appearance: auto !important;
                    background-color: #fff;
                }
                select.form-control {
                    display: block !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    background-image: none;
                    cursor: pointer;
                    position: relative;
                    z-index: 10;
                }
                /* Hide nice-select generated elements */
                :global(.nice-select) {
                    display: none !important;
                }
                .form-control:focus {
                    box-shadow: none;
                    border-color: #030b58;
                }
                textarea.form-control {
                    height: auto;
                }
                .btn-primary {
                    padding: 12px 35px;
                    font-size: 16px;
                    font-weight: 600;
                }
            `}</style>
        </section>
    );
};

export default BookingForm;
