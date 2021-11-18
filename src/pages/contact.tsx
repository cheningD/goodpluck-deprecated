import Nav from '../components/Nav'
import React from 'react'
import Seo from '../components/Seo'
import styled from 'styled-components'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
  padding-bottom: 32px;
`
const Content = styled.div`
  margin: 200px auto;
  max-width: 500px;
`

const Contact = () => {
  return (
    <>
      <Page>
        <Seo title="Contact Us | Goodpluck" />
        <Nav />
        <Content>
          <h1>Contact Us</h1>
          <div>Click the chat icon in the bottom right of the screen to chat now.</div>
          <div>Or, contact us at hello@goodpluck.com</div>
        </Content>
      </Page>
    </>
  )
}

export default Contact
