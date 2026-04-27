"use client"

import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const FloatingWhatsApp = () => {
    const { language } = useLanguage();
    
    // WhatsApp URL
    const whatsappUrl = "https://api.whatsapp.com/send?phone=966535195519";

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label={language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'}
        >
            <i className="fab fa-whatsapp"></i>
            <span className="whatsapp-tooltip">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </span>
        </a>
    )
}

export default FloatingWhatsApp;
