import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import Nav from "../components/Nav"
import React from "react"
import SEO from "../components/SEO"

export default function Privacy() {
  //Check document is defined for SSR
  if (typeof document === `undefined`) {
    return ""
  }

  return (
    <>
      <Helmet>
        <script defer src="https://app.termly.io/embed-policy.min.js"></script>
      </Helmet>
      <SEO title="Privacy | Goodpluck" />
      <Nav />

      <div
        name="termly-embed"
        data-id="d0d093cd-d150-4a3b-bfae-2163c896e7c0"
        data-type="iframe"
      ></div>
      <Footer />
    </>
  )
}
