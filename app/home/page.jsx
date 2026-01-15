import React from 'react'
import { HomeHero } from './components/HomeHero'
import ScrollTicker from '../components/ScrollTicker'
import HomeAbout from './components/HomeAbout'
import HomeMission from './components/HomeMission'
import HomeImportance from './components/HomeImportance'
import VideoGallery from './components/VideoGallery'
import PhotoGallery from './components/PhotoGallery'
import BMICalculator from './components/BMICalculator'
import HomeOperations from './components/HomeOperations'
import HomeFeedback from './components/HomeFeedback'
import HomeFAQ from './components/HomeFAQ'
import HomeBlog from './components/HomeBlog'

const page = () => {
    return (
        <div>
            <HomeHero />
            <ScrollTicker />
            <HomeAbout />
            <HomeMission />
            <HomeImportance />
            <VideoGallery />
            <PhotoGallery />
            <BMICalculator />
            <HomeOperations />
            <HomeFeedback />
            <HomeFAQ />
            <HomeBlog />
            
        </div>
    )
}

export default page