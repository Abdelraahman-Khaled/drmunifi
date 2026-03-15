"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage = 'ar' }) => {
    const [language, setLanguage] = useState(initialLanguage);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setLanguage(initialLanguage);
    }, [initialLanguage]);
    
    useEffect(() => {
        // Update HTML attributes
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

        // Update body class for legacy scripts (like main.js)
        if (language === 'ar') {
            document.body.classList.add('arabic');
        } else {
            document.body.classList.remove('arabic');
        }
    }, [language]);

    const toggleLanguage = () => {
        const newLang = language === 'ar' ? 'en' : 'ar';
        
        // Simple path replacement for static routes.
        // For dynamic routes (blogs/operations), we might need a more complex logic, 
        // but often redirecting to the index of that section in the new language is a safe fallback.
        // Here we just replace the locale segment.
        const pathSegments = pathname.split('/');
        pathSegments[1] = newLang;
        const newPath = pathSegments.join('/') || `/${newLang}`;
        
        router.push(newPath);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
