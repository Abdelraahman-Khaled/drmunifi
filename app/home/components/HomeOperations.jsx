"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import OperationCard from '@/app/types-of-operations/components/OperationCard'
import { getOperations } from '@/app/api/operations'

const HomeOperations = () => {
    const { language } = useLanguage();
    const t = translations.home[language].operations;
    const [operations, setOperations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOperations = async () => {
            try {
                const data = await getOperations();
                setOperations(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to fetch operations:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOperations();
    }, []);


    return (
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>{t.title}</span>
                    <h2>{t.subTitle}</h2>
                    <p>{t.desc}</p>
                </div>

                <div className="row gy-4">
                    {loading ? (
                        <div className="col-12 text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        operations.slice(0, 3).map((operation, index) => (
                            <OperationCard key={index} operation={operation} />
                        ))
                    )}
                </div>

                <div className="text-center mt-5">
                    <Link href={`/types-of-operations`} className="btn btn-primary d-inline-block">
                        {t.btn} <i className="flaticon-right-chevron"></i>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .single-services-box {
                    padding: 30px;
                    border: 1px solid #eee;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                }
                .single-services-box:hover {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    transform: translateY(-5px);
                }
                .read-more-btn {
                    color: var(--main-color);
                    font-weight: 600;
                    text-decoration: none;
                }
            `}</style>
        </section>
    )
}

export default HomeOperations;
