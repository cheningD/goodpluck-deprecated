import Image from '../components/Image'
import React from 'react'
import { SubmitButton } from '../components/StyledComponentLib'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #788474;
`

const SubSection = styled.div`
  color: #fff;
  position: relative;
  @media screen and (max-width: 767px) {
    position static
  }
`

const MainCopy = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid #fff;
  border-radius: 4px;

  @media screen and (max-width: 767px) {
    width: 100%;
    position: static;
    padding: 16px;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
`

const MainImage = styled(Image)`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 400px;
  }
  @media screen and (max-width: 479px) {
    height: 200px;
  }
`

const Header = styled.h1`
  font-family: Bebas Neue, sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  margin: 16px 0;
  white-space: normal;
`

const Text = styled.p`
  font-weight: 600;
  margin-bottom: 16px;
`

const PrimaryButton = styled(SubmitButton)`
  border-color: #fff;
  color: #3f3a40;
  width: calc(100% - 64px);
  max-width: 400px;
  margin: 32px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HowItWorksSection = () => {
  return (
    <Section>
      <SubSection>
        <MainImage src="produceSpread1.png" alt="Assorted Produce" />
        <MainCopy>
          <Header>The Local Pluck Basket</Header>
          <Text>
            We fill our <strong>Local Pluck Basket</strong> with the best local produce we find each week.
          </Text>
          <Text>Your basket is 100% customizable.</Text>
          <Text>Add, change or remove any item from our selection of produce, farm goods, and groceries.</Text>
          <PrimaryButton to="/getstarted">
            <div>Build Your First Basket</div>
          </PrimaryButton>
        </MainCopy>
      </SubSection>
    </Section>
  )
}

export default HowItWorksSection
