"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage = 'ar' }) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [pathMap, setPathMap] = useState(null);
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
        
        // If a custom path map is provided (for dynamic slugs), use it
        if (pathMap && pathMap[newLang]) {
            router.push(pathMap[newLang]);
            return;
        }

        // Simple path replacement for static routes.
        const pathSegments = pathname.split('/');
        pathSegments[1] = newLang;
        const newPath = pathSegments.join('/') || `/${newLang}`;
        
        router.push(newPath);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, setPathMap }}>
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
