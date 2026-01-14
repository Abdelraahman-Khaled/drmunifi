"use client";

import React, { useEffect, useState } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        // Fallback: hide preloader after 3 seconds anyway to avoid getting stuck
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(timeout);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="preloader">
            <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-icon">
                    <img src="/assets/img/favicon.png" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
