import FAQSection from '../components/FAQSection'
import FeaturesSection from '../components/FeaturesSection'
import HeroSection from '../components/HeroSection'
import HowItWorksSection from '../components/HowItWorksSection'
import Nav from '../components/Nav'
import NewsletterSignup from '../components/NewsletterSignup'
import React from 'react'
import Seo from '../components/Seo'
import styled from 'styled-components'

const Body = styled.div`
  font-size: 1 rem;
`

export default function Home() {
  return (
    <Body>
      {/* <Notification /> */}
      <Seo />
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <NewsletterSignup />
    </Body>
  )
}
