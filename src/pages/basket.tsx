import Basket from '../components/Basket'
import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import Nav from '../components/Nav'
import React from 'react'
import SEO from '../components/SEO'
import { Spinner } from '../components/StyledComponentLib'
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
  color: var(--blackish);
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  padding: 32px 0;
  text-align: center;
`

const BasketPage = () => {
  let content = <Spinner />

  if (useRecoilValue(isSignedIn) || process.env.GATSBY_DEPLOY_ENVIRONMENT === 'DEVELOPMENT') {
    content = (
      <BasketContainer>
        <Basket canEdit={true} />
      </BasketContainer>
    )
  }

  return (
    <Page>
      <SEO title="My Basket" />
      <Nav />
      <BasketAccountShopLinks />
      {content}
    </Page>
  )
}
export default BasketPage
