import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import ServicesSection from '../components/Service'
import StorySection from '../components/StorySection'
import Work from '../components/Work'
import Contact from '../components/Contact'
import FindUs from '../components/Findus'
import Testimonials from '../components/Review'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <About />
      <ServicesSection />
      <Testimonials />
      <Work />
      <Contact />
      <FindUs />
    </div>
  )
}

export default Home
