import React, { useEffect, useState } from 'react'

import Basket from '../components/Basket'
import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import { Header } from '../components/StyledComponentLib'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { SignedInData } from '../types'
import { signedInUser } from '../store'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

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

const H1 = styled(Header)`
  color: #000;
  margin-bottom: 16px;
`

const BasketPage = () => {
  return (
    <Page>
      <SEO title="My Basket" />
      <Nav />
      <BasketAccountShopLinks />
      <BasketContainer>
        <Basket canEdit={true} />
      </BasketContainer>
    </Page>
  )
}
export default BasketPage
