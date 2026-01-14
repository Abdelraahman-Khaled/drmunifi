import React from 'react'
import HeroSection from '../components/HeroSection'
import ScrollTicker from '../components/ScrollTicker'
import OperationsContainer from './components/OperationsContainer'

const page = () => {
    return (
        <>
            <HeroSection title={"أنواع العمليات"} number={4} />
            <ScrollTicker />
            <OperationsContainer />
        </>
    )
}

export default page