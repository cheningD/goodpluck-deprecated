import { Card } from "../components/StyledComponentLib"
import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background-color: #788474;
  padding: 32px 32px 128px 32px;
`
const Newsletter = styled(Card)`
  margin: 0 auto;
`

const NewsletterSignup = () => {
  return (
    <Section>
      <Newsletter>
        <iframe
          title="newsletter-signup"
          className="footer-newsletter-signup"
          src="https://cdn.forms-content.sg-form.com/2628788e-f24d-11ea-8e09-06b692f79d11"
        />
      </Newsletter>
    </Section>
  )
}

export default NewsletterSignup
