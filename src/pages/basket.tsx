import React, { useEffect, useState } from 'react'
import { isSignedIn, signedInUser } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import Basket from '../components/Basket'
import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import { SignedInData } from '../types'
import { Spinner } from '../components/StyledComponentLib'
import { getSignedInData } from '../actions'
import styled from 'styled-components'

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
  const [user, setUser] = useRecoilState(signedInUser)
  const [fetchComplete, setFetchComplete] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const signedInData: SignedInData = await getSignedInData()
      setFetchComplete(true)
      if (signedInData && signedInData.signedInUser) {
        setUser(signedInData.signedInUser)
      }
    }

    if (!user) {
      fetchData()
    }
  }, [])

  let content = <Spinner />
  if (fetchComplete) {
    content = (
      <H1>
        Please <Link to="/signin">sign in</Link> to see your basket
      </H1>
    )
  }

  if (useRecoilValue(isSignedIn)) {
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
