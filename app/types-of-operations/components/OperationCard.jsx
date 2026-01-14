"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const OperationCard = ({ operation }) => {
    const { language } = useLanguage();

    const title = operation.title;
    const description = operation.description;
    const slug = operation.slug;
    const baseLink = language === 'ar' ? '/operation-details' : '/en/operation-details';
    const link = `${baseLink}/${slug}`;
    const readMore = language === 'ar' ? "اقرأ المزيد" : "Read more";

    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box bg-1">
                <div className="icon">
                    <Image
                        src={operation.cardImage}
                        alt={title}
                        width={42}
                        height={42}
                        style={operation.id === 4 ? { width: '42px' } : {}}
                    />
                </div>
                <h3>
                    <Link href={link}>{title}</Link>
                </h3>
                <p>{description}</p>
                <Link href={link} className="read-more-btn">
                    {readMore} <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default OperationCard
