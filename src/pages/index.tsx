import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import MarketTeaser from '../components/MarketTeaser'
import Nav from '../components/Nav'
import { PageProps } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import Testimonial from '../components/Testimonial'

export default function Home(props: PageProps) {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <MarketTeaser />
      <Testimonial />
      <Footer />
    </>
  )
}

export const Head = () => {
  return <Seo />
}
