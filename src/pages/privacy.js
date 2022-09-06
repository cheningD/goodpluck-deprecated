import Footer from '../components/Footer'
import Nav from '../components/Nav'
import React from 'react'
import Seo from '../components/Seo'

export default function Privacy() {
  //Check document is defined for SSR
  if (typeof document === `undefined`) {
    return ''
  }

  return (
    <>
      <Nav />

      <div name="termly-embed" data-id="d0d093cd-d150-4a3b-bfae-2163c896e7c0" data-type="iframe"></div>
      <Footer />
    </>
  )
}

export const Head = () => {
  return (
    <>
      <script defer src="https://app.termly.io/embed-policy.min.js"></script>
      <Seo title="Privacy | Goodpluck" />
    </>
  )
}
