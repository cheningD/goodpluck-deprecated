import Image from "../components/Image"
import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background-color: #f7c59f;
  padding-bottom: 80px;
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  max-width: 1200px;
  margin: 0 32px;

  //Overlap the previous section by 100px
  margin-bottom: -100px;
  position: relative;
  top: -100px;

  @media screen and (max-width: 767px) {
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0px;
    position: static;
    top: 0px;
  }
`

const Feature = styled.div`
  color: #2d2d2e;
  width: 33%;
  padding: 24px 40px;
  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const Header = styled.h1`
  font-family: Bebas Neue, sans-serif;
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1.675rem;
  margin: 16px 0;
  min-height: 55px;
`

const Detail = styled.div`
  @media screen and (max-width: 767px) {
    width: calc(100% - 60px);
  }
`

const Text = styled.div`
  font-weight: 500;
`

const Green = styled.span`
  color: #6c7668;
`

const Pink = styled.span`
  color: #d46b66;
`

const Icon = styled(Image)`
  margin-top: 12px;
  height: 30px;
  width: 30px;
`

const FeaturesSection = () => {
  return (
    <Section>
      <Card>
        <Feature>
          <Icon src="greens.png" alt="Fresh Grens" />
          <Detail>
            <Header>
              Produce At <Pink>Peak Freshness</Pink>
            </Header>
            <Text>
              Your produce gets harvested shortly before it arrives on your
              doorstep
            </Text>
          </Detail>
        </Feature>

        <Feature>
          <Icon src="money.png" alt="Flying Money" />
          <Detail>
            <Header>
              Not The <Green>Whole Paycheck</Green>
            </Header>
            <Text>
              We source high-quality produce for less by working with local
              farms too small to sell to stores.
            </Text>
          </Detail>
        </Feature>

        <Feature>
          <Icon src="wheat.png" alt="Growing Wheat" />
          <Detail>
            <Header>
              <Pink>Sustainable</Pink> By Default
            </Header>
            <Text>
              We champion eco-friendly packaging, and regenerative farming
              practices, because we like living here on earth.
            </Text>
          </Detail>
        </Feature>
      </Card>
    </Section>
  )
}

export default FeaturesSection
