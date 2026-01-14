import React from 'react'
import Image from 'next/image'
import { operationsData } from '@/app/data/operationsData'
import HeroSection from '@/app/components/HeroSection'
import ScrollTicker from '@/app/components/ScrollTicker';

export async function generateStaticParams() {
    return operationsData.map((operation) => ({
        slug: operation.slug,
    }));
}

const OperationDetailsPage = async ({ params }) => {
    const { slug } = await params;
    const operation = operationsData.find((o) => o.slug === decodeURIComponent(slug));

    if (!operation) {
        return (
            <div className="ptb-100 text-center">
                <h2>Operation not found</h2>
            </div>
        );
    }

    const isAr = operation.language === 'ar';

    return (
        <>
            <HeroSection
                title={operation.title}
                subTitle={isAr ? "أنواع جراحات السمنة" : "Types of Bariatric Surgeries"}
                subTitleLink="/types-of-operations"
                number={2}
            />
            <ScrollTicker />
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services-details-desc">
                                <div className="services-details-image">
                                    <Image
                                        src={operation.image}
                                        alt={operation.title}
                                        width={1200}
                                        height={600}
                                        priority
                                    />
                                </div>

                                <h1>{operation.title}</h1>

                                <div dangerouslySetInnerHTML={{ __html: operation.content }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OperationDetailsPage;
