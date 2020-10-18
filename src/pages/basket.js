import Basket from "../components/Basket"
import Nav from "../components/Nav"
import React from "react"
import SEO from "../components/SEO"
import styled from "styled-components"

const Page = styled.div`
  background-color: #fbe1cf;
  min-height: 100vh;
`

const BasketPage = () => {
  return (
    <Page>
      <SEO title="My Basket" />
      <Nav />
      <Basket deliveryDate="Saturday, Oct 24" orderFrequency="Every Week" />
    </Page>
  )
}
export default BasketPage
