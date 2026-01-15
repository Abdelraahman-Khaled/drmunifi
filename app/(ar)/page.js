"use client";

import React from 'react';
import { HomeHero } from '../home/components/HomeHero';
import ScrollTicker from '../components/ScrollTicker';
import HomeAbout from '../home/components/HomeAbout';
import HomeMission from '../home/components/HomeMission';
import HomeImportance from '../home/components/HomeImportance';
import VideoGallery from '../home/components/VideoGallery';
import PhotoGallery from '../home/components/PhotoGallery';
import BMICalculator from '../home/components/BMICalculator';
import HomeOperations from '../home/components/HomeOperations';
import HomeFeedback from '../home/components/HomeFeedback';
import HomeFAQ from '../home/components/HomeFAQ';
import HomeBlog from '../home/components/HomeBlog';

export default function Home() {
    return (
        <main>
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
        </main>
    );
}
