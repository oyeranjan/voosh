import React from 'react'
import LandingSection from "./IndexPage/LandingSection";
import AboutSection from "./IndexPage/AboutSection";
import HowItWorks from "./IndexPage/HowItWorks";
import WhatVooshOffers from "./IndexPage/WhatVooshOffers";
import Testimonials from "./IndexPage/Testimonials";
import Cuisines from './IndexPage/Cuisines';
import MapCapex from './IndexPage/MapCapex';
const HomeView = () => {
    return (
      <>
        <LandingSection />
        <AboutSection />
        <HowItWorks />
        <WhatVooshOffers />
        <Cuisines />
        <Testimonials />
        <MapCapex />
      </>
    );
}

export default HomeView
