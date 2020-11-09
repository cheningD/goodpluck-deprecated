import { Link, navigate } from 'gatsby'

import Arrow from '../images/icons/arrow.svg'
import { Header } from '../components/StyledComponentLib'
import Nav from '../components/Nav'
import Phone from '../images/icons/phone.svg'
import React from 'react'
import SEO from '../components/SEO'
import { isSignedIn } from '../store'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

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
  if (useRecoilValue(isSignedIn)) {
    navigate('/myaccount')
  }

  return (
    <>
      <SEO title="Verify Email | Goodpluck" />
      <Nav />

      <Wrapper>
        <Content>
          <Header>Approve this login from your email</Header>
          <PhoneIcon />

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
