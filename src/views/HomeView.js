import React from 'react'
import LandingSection from "./IndexPage/LandingSection";
import AboutSection from "./IndexPage/AboutSection";
import HowItWorks from "./IndexPage/HowItWorks";
import WhatVooshOffers from "./IndexPage/WhatVooshOffers";
import Testimonials from "./IndexPage/Testimonials";
const HomeView = () => {
    return (
      <>
        <LandingSection />
        <AboutSection />
        <HowItWorks />
        <WhatVooshOffers />
        <Testimonials />
      </>
    );
}

export default HomeView
