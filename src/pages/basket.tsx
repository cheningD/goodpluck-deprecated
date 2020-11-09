import Basket from '../components/Basket'
import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import React from 'react'
import SEO from '../components/SEO'
import { isSignedIn } from '../store'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
`

const BasketContainer = styled.div`
  padding: 16px;
  font-weight: 500;
  max-width: 500px;
  margin: 32px auto;
`

const H1 = styled.h1`
  color: var(—blackish);
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  padding: 32px 0;
  text-align: center;
`

const BasketPage = () => {
  return (
    <Page>
      <SEO title="My Basket" />
      <Nav />
      <BasketAccountShopLinks />
      {useRecoilValue(isSignedIn) ? (
        <BasketContainer>
          <Basket canEdit={true} />
        </BasketContainer>
      ) : (
        <H1>
          Please <Link to="/signin">sign in</Link> to see your basket
        </H1>
      )}
    </Page>
  )
}
export default BasketPage
