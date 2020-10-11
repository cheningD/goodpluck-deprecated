import Arrow from "../images/icons/arrow.svg"
import { ButtonSmall } from "../components/StyledComponentLib"
import Image from "../components/Image"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #fbe1cf;
`
const HeroWrap = styled.div`
  border-bottom: 1px solid #ebedee;
  border: 1px none #000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: column-reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 479px) {
  }
`
const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
`

const HeroContent = styled.div`
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    text-align: center;
    max width: 80%;
  }
`

const HeroImage = styled(Image)`
  height: 100%;
  width: 40%;
  min-height: 600px;
  max-height: 80vh;

  @media screen and (max-width: 767px) {
    width: 100%;
    min-height: 40vh;
    max-height: 40vh;
  }
`

const HeroTitle = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  @media screen and (max-width: 991px) {
    padding: 47px 0px 47px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 37px;
    padding-bottom: 47px;
  }
`
const HeroHeader = styled.div`
  font-family: Bebas Neue, sans-serif;
  margin-top: 20px;
  margin-bottom: 25px;
  color: #6c7668;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 500;
  text-shadow: 0px 3px 6px rgba(255, 255, 255, 0.76);
  white-space: normal;

  @media screen and (max-width: 767px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`
const HeroParagraph = styled.p`
  margin-bottom: 30px;
  color: #6c7668;
  font-size: 20px;
  font-weight: 600;
`

const CTAButton = styled(ButtonSmall)`
  max-width: 100%;
  display: inline-block;
`

const CTAButtonText = styled.div`
  display: inline-block;
`

const ButtonArrow = styled(Arrow)`
  display: inline-block;
  margin-left: 20px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`

const PrimaryButton = styled(ButtonSmall)`
  background-color: #fffd82;
  border-radius: 4px;
  border: 2px solid #3f3a40;
  color: #3f3a40;
  margin: 16px auto;
  max-width: 100%;
  display: inline-block;
`

const HeroSection = () => {
  return (
    <Wrapper>
      <HeroWrap>
        <Columns>
          <HeroContent>
            <HeroTitle>
              <HeroHeader>
                <div>Just-Picked</div>
                <div>Local Produce</div>
                <div>On Your Doorstep</div>
              </HeroHeader>
              <HeroParagraph>
                Support sustainable, local farms and get the best of what is
                growing each week delivered to your door
              </HeroParagraph>
            </HeroTitle>
            <PrimaryButton to="/getstarted">
              <CTAButtonText>Create Your Basket</CTAButtonText>
              <ButtonArrow />
            </PrimaryButton>
          </HeroContent>
          <HeroImage src="HeroImageAppleBasket.jpg" alt="Local apples" />
        </Columns>
      </HeroWrap>
    </Wrapper>
  )
}

export default HeroSection
