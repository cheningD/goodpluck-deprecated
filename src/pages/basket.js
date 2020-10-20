import Basket from "../components/Basket"
import { Header } from "../components/StyledComponentLib"
import Nav from "../components/Nav"
import React from "react"
import SEO from "../components/SEO"
import styled from "styled-components"

const Page = styled.div`
  background-color: #fbe1cf;
  min-height: 100vh;
`

const BasketContainer = styled.div`
  padding: 16px;
  font-weight: 500;
  max-width: 500px;
  margin: 32px auto;
`

const H1 = styled(Header)`
  color: #000;
  margin-bottom: 16px;
`

const BasketPage = () => {
  return (
    <Page>
      <SEO title="My Basket" />
      <Nav />
      <BasketContainer>
        <H1>My Basket</H1>
        <Basket
          deliveryDate="Saturday, Oct 24"
          orderFrequency="Every Week"
          canEdit={true}
        />
      </BasketContainer>
    </Page>
  )
}
export default BasketPage
