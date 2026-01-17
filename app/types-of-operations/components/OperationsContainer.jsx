"use client"
import React, { useEffect, useState } from 'react'
import { operationsData } from '@/app/data/operationsData'
import OperationCard from './OperationCard'
import { useLanguage } from '@/context/LanguageContext'
import { getOperations } from '@/app/api/operations'

const OperationsContainer = () => {
    const { language } = useLanguage();
    const [operations, setOperations] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchOperations = async () => {
            try {
                const data = await getOperations();
                // Ensure data is an array
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
        <section className="services-area ptb-100 bg-f4f9fd">
            <div className="container">
                <div className="row gy-4">
                    {loading ? (
                        <div className="col-12 text-center mt-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-2 text-muted">Thinking...</p>
                        </div>
                    ) : (
                        operations.map((operation) => (
                            <OperationCard key={`${operation.id}`} operation={operation} />
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default OperationsContainer
