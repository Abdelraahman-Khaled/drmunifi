"use client"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Injects canonical + hreflang <link> tags into <head>.
 *
 * Props:
 *  - arHref  : full Arabic URL  (optional, auto-detected if omitted)
 *  - enHref  : full English URL (optional, auto-detected if omitted)
 *  - canonical: which language is canonical ("ar" | "en", default "ar")
 */
const BASE = "https://almunifi.com";

export default function HreflangTags({ arHref, enHref, canonical = "ar" }) {
    const pathname = usePathname();

    useEffect(() => {
        // Derive hrefs from pathname when not explicitly provided
        const resolvedAr = arHref || `${BASE}${pathname}`;
        const resolvedEn = enHref || `${BASE}${pathname}`;
        const canonicalUrl = canonical === "en" ? resolvedEn : resolvedAr;

        const setLink = (rel, hreflang, href) => {
            const id = `hreflang-${hreflang || rel}`;
            let el = document.getElementById(id);
            if (!el) {
                el = document.createElement("link");
                el.id = id;
                document.head.appendChild(el);
            }
            el.rel = rel;
            if (hreflang) el.hreflang = hreflang;
            el.href = href;
        };

        // Canonical
        setLink("canonical", null, canonicalUrl);
        // hreflang Arabic
        setLink("alternate", "ar", resolvedAr);
        // hreflang English
        setLink("alternate", "en", resolvedEn);
        // x-default → canonical
        setLink("alternate", "x-default", canonicalUrl);

        return () => {
            ["canonical", "ar", "en", "x-default"].forEach((id) => {
                const el = document.getElementById(`hreflang-${id}`);
                if (el) el.remove();
            });
        };
    }, [arHref, enHref, canonical, pathname]);

    return null;
}
