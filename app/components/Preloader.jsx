"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Preloader = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(true);
    const [prevPathname, setPrevPathname] = useState(pathname);

    // Render-phase state update to avoid FOUC (Flash of Unstyled Content)
    // When pathname changes, we reset loading IMMEDIATELY before paint.
    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setLoading(true);
        setRender(true);
    }

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => {
                setRender(false);
            }, 600); // Wait for animation to finish
            return () => clearTimeout(timer);
        } else {
            setRender(true);
        }
    }, [loading]);

    useEffect(() => {
        // Start the timer to hide preloader
        // We don't need setLoading(true) here because the render-phase check handled it.
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Adjust duration as needed

        return () => clearTimeout(timer);
    }, [pathname, loading]);


    if (!render) return null;

    return (
        <div className={`preloader ${!loading ? 'loaded' : ''}`}>
            <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-icon">
                    <Image
                        src="/assets/img/favicon.png"
                        alt="Preloader Icon"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
    )
}

export default Preloader;
