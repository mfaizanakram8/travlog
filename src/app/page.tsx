import Explore from '@/components/Explore'
import Features from '@/components/Features'
import Find from '@/components/Find'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Subscribe from '@/components/Subscribe'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Explore/>
      <Find/>
      <Features/>
      <Testimonials/>
      <Subscribe/>
     <Footer/>
    </div>
  )
}

export default page
