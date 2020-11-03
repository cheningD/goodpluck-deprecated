import React, { useEffect, useState } from "react"

import BasketDates from "../components/BasketDates"
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import { SignedInData } from "../types"
import { Spinner } from "../components/StyledComponentLib"
import { getSignedInData } from "../actions"
import { navigate } from "gatsby"
import { signedInUser } from "../store"
import styled from "styled-components"
import { useRecoilState } from "recoil"

const Page = styled.div`
  background-color: #fbe1cf;
  padding-bottom: 32px;
`

const MyAccount = () => {
  const [user, setUser] = useRecoilState(signedInUser)

  useEffect(() => {
    async function fetchData() {
      const signedInData: SignedInData = await getSignedInData()
      if (!signedInData.signedInUser) {
        navigate("/signin")
      } else {
        setUser(signedInData.signedInUser)
      }
    }

    if (!user) {
      fetchData()
    }
  }, [])

  if (!user) {
    return (
      <>
        <SEO title="My Account | Goodpluck" />
        <Nav />
        <Page>
          <Spinner />
        </Page>
      </>
    )
  }

  return (
    <>
      <SEO title="My Account | Goodpluck" />
      <Nav />
      {JSON.stringify(user)}
      <Page>
        <BasketDates />
      </Page>
    </>
  )
}

export default MyAccount
