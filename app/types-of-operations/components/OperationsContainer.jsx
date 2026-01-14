"use client"
import React from 'react'
import { operationsData } from '@/app/data/operationsData'
import OperationCard from './OperationCard'
import { useLanguage } from '@/context/LanguageContext'

const OperationsContainer = () => {
    const { language } = useLanguage();
    const filteredOperations = operationsData.filter((op) => op.language === language);

    return (
        <section className="services-area ptb-100 bg-f4f9fd">
            <div className="container">
                <div className="row gy-4">
                    {filteredOperations.map((operation) => (
                        <OperationCard key={`${operation.id}-${operation.language}`} operation={operation} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OperationsContainer
