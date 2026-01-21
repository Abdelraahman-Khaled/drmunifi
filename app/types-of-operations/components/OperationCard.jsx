"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const OperationCard = ({ operation }) => {
    const { language } = useLanguage();

    const title = language === 'ar' ? (operation.title_ar || operation.title) : (operation.title_en || operation.title_ar);
    const description = language === 'ar' ? (operation.description_ar || operation.description) : (operation.description_en || operation.description_ar);
    const slug = language === 'ar' ? (operation.slug_ar || operation.slug) : (operation.slug || operation.slug_en);
    const baseLink = language === 'ar' ? '/operation-details' : '/operation-details';
    const link = `${baseLink}/${slug}`;
    const readMore = language === 'ar' ? "اقرأ المزيد" : "Read more";

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box bg-1">
                <div className="icon">
                    {/* Fallback image or ensure cardImage exists in API or mapped appropriately */}
                    <Image
                        src={operation.photos?.[0]?.url || operation.photo_url || "/images/services/service-icon-1.png"}
                        alt={title}
                        width={42}
                        height={42}
                        style={operation.id === 4 ? { width: '42px' } : {}}
                    />
                </div>
                <h3>
                    <Link href={link}>{title}</Link>
                </h3>
                <p className="line-clamp-2">{description}</p>
                <Link href={link} className="read-more-btn">
                    {readMore} <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default OperationCard
