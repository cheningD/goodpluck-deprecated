import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import React from 'react'
import SEO from '../components/SEO'

export default function Terms() {
  //Check document is defined for SSR
  if (typeof document === `undefined`) {
    return ''
  }
  return (
    <>
      <Helmet>
        <script defer src="https://app.termly.io/embed-policy.min.js"></script>
      </Helmet>
      <SEO title="Terms" />
      <Nav />

      <div name="termly-embed" data-id="b2d69771-b7ea-40c3-a44a-9618b080cb45" data-type="iframe"></div>
    </>
  )
}
