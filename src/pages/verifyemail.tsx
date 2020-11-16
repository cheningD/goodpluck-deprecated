import { Header, Spinner } from '../components/StyledComponentLib'
import { Link, navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { isSignedIn, signedInUser } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import Arrow from '../images/icons/arrow.svg'
import { GoodPluckJSONResponse } from '../types'
import Nav from '../components/Nav'
import Phone from '../images/icons/phone.svg'
import SEO from '../components/SEO'
import styled from 'styled-components'
import { verifyEmail } from '../actions'

const Wrapper = styled.div`
  background-color: #6c7668;
  width: 100%;
  min-height: calc(100vh + 32px);
  padding-bottom: 32px;
`
const Content = styled.div`
  width: 500px;
  padding-top: 64px;
  margin: 0 auto;

  @media screen and (max-width: 479px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`

const WhiteArrow = styled(Arrow)`
  padding-right: 8px;
  // Make the arrow white
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(157deg) brightness(110%) contrast(114%);
`

const HelpText = styled.div`
  margin-top: 32px;
  font-size: 0.9rem;
  color: #dcdcdc;
  font-family: hk_groteskregular, sans-serif;
  span {
    padding: 0 4px;
  }
  a {
    text-decoration: none;
    color: #dcdcdc;
  }
  a: hover {
    font-family: font-family: hk_grotesksemibold, sans-serif;
    text-decoration: none;
    border-bottom: 2px solid #f7c59f;
    color: #f7c59f;
  }
`

const PhoneIcon = styled(Phone)`
  height: 100px;
`

const VerifyEmail = () => {
  const [user, setUser] = useRecoilState(signedInUser)
  const [errorText, setErrorText] = useState('')
  const [loading, setLoading] = useState(false)
  const isUserSignedIn = useRecoilValue(isSignedIn)

  const verify = async (authCodeId: string, code: string, email: string) => {
    setLoading(true)
    const json: GoodPluckJSONResponse = await verifyEmail(authCodeId, code, email)
    if (json.error) {
      setErrorText(json.error)
      setLoading(false)
    } else {
      setUser(json.data.signedInUser)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isUserSignedIn) {
      if (typeof window !== `undefined`) {
        const params = new URLSearchParams(window.location.search)
        if (params.has('email') && params.has('code') && params.has('authCodeId')) {
          verify(params.get('authCodeId'), params.get('code'), params.get('email'))
        } else {
          setLoading(false)
        }
      }
    }
  }, [])

  if (isUserSignedIn) {
    navigate('/myaccount')
  }

  let header = 'Approve this login from your email'
  if (loading) {
    header = 'Logging you in...'
  } else if (errorText) {
    header = errorText
  }
  return (
    <>
      <SEO title="Verify Email | Goodpluck" />
      <Nav />

      <Wrapper>
        <Content>
          <Header>{header}</Header>
          {loading ? <Spinner /> : <PhoneIcon />}

          <HelpText>
            <div>Need help signing in?</div>
            <div>
              <WhiteArrow />
              <Link to="/contact">Contact us</Link>
            </div>
            <div>
              <WhiteArrow />
              <Link to="/signin">Try a different email</Link>
            </div>
          </HelpText>
        </Content>
      </Wrapper>
    </>
  )
}

export default VerifyEmail
