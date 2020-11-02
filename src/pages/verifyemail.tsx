import { Header, Spinner } from "../components/StyledComponentLib"
import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"

import Arrow from "../images/icons/arrow.svg"
import Nav from "../components/Nav"
import Phone from "../images/icons/phone.svg"
import SEO from "../components/SEO"
import styled from "styled-components"
import { verifyEmail } from "../actions"

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
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(157deg)
    brightness(110%) contrast(114%);
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
  const [isVerifying, setIsVerifying] = useState(false)
  const [errorText, setErrorText] = useState("")
  let header = isVerifying
    ? "Verifying your email..."
    : "Approve this login from your email"

  useEffect(() => {
    async function fetchData(authCodeId: string, code: string, email: string) {
      setIsVerifying(true)
      const isSignedIn = await verifyEmail(
        authCodeId,
        code,
        email,
        setErrorText
      )
      setIsVerifying(false)
      if (isSignedIn) {
        navigate("/myaccount")
      }
    }

    if (typeof window !== `undefined`) {
      const params = new URLSearchParams(window.location.search)
      if (
        params.has("email") &&
        params.has("code") &&
        params.has("authCodeId")
      ) {
        fetchData(
          params.get("authCodeId"),
          params.get("code"),
          params.get("email")
        )
      } else {
        setIsVerifying(false)
      }
    }
  }, [])

  if (typeof window === `undefined`) {
    return null
  }

  return (
    <>
      <SEO title="Verify Email | Goodpluck" />
      <Nav />

      <Wrapper>
        <Content>
          <Header>{errorText || header}</Header>
          {isVerifying ? <Spinner /> : errorText ? "" : <PhoneIcon />}

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
