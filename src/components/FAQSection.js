import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background-color: #788474;
  padding: 80px 0;
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 40px;
  margin: 0 32px;

  @media screen and (max-width: 767px) {
    border-radius: 0;
    margin: 0;
  }
`

const Faq = styled.div`
  color: #2d2d2e;
  width: 100%;
  padding: 0;
`

const H2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;
  margin: 32px 0 16px 0;
`

const H1 = styled.h1`
  font-family: Bebas Neue, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.75rem;
  margin: 0;
`

const Text = styled.div`
  font-weight: 500;
  margin-bottom: 8px;
`

const FAQSection = () => {
  return (
    <Section>
      <Card>
        <H1>FAQ</H1>
        <Faq>
          <H2>Is this a local produce box?</H2>
          <Text>
            Our <strong>Local Pluck Basket</strong> is filled with the best local produce growing each week and is a
            great starting point to building your order.
          </Text>
          <Text>You can add or remove items from our selection of local and sustainable produce and groceries.</Text>
        </Faq>

        <Faq>
          <H2>Is the subscription flexible?</H2>
          <Text>Yes!</Text>
          <Text>You can skip, pause or cancel at any time, without any gotchas.</Text>
        </Faq>

        <Faq>
          <H2>When and how will my order arrive?</H2>
          <Text>You can choose your preferred delivery day on signup.</Text>
          <Text>
            Depending on the weather, we protect your fresh produce fresh with a variety of compostable bags and ice
            packs, eco-friendly insulation and recyclable boxes
          </Text>
        </Faq>

        <Faq>
          <H2>Have more questions?</H2>
          <button
            className="gp-button-link"
            onClick={() => {
              window.MissiveChat.open()
            }}
          >
            Chat with us!
          </button>
        </Faq>
      </Card>
    </Section>
  )
}

export default FAQSection
