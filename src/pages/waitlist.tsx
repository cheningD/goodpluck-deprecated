import FormWrapper from '../components/FormWrapper'
import Nav from '../components/Nav'
import React from 'react'
import Seo from '../components/Seo'
import { navigate } from 'gatsby'
import styled from 'styled-components'

const LightText = styled.div`
  color: white;
`

export default function Waitlist() {
  let city: string
  let zip: string
  let waitlistZone: boolean
  let email: string

  if (typeof window !== `undefined`) {
    const params = new URLSearchParams(window.location.search)
    email = params.get('email')
    zip = params.get('zip')
    city = params.get('city')
    waitlistZone = params.get('waitlistZone') === 'true' ? true : false
  }

  const formOpts = {}
  if (email) {
    formOpts['prefill_email'] = email
  }
  if (zip) {
    formOpts['prefill_zip'] = zip
  }
  const formParams = new URLSearchParams(formOpts).toString()
  const FormContent = () => {
    return (
      <LightText>
        <h2>{waitlistZone ? `But...` : ''}</h2>
        <h2>
          {waitlistZone ? `${city ? `${city} is` : 'your area is'} on our shortlist of where to launch next!` : ''}
        </h2>
        <span>Add your email to our waitlist to be notified when Goodpluck is available in your community</span>
      </LightText>
    )
  }
  return (
    <>
      <Seo title="Sign In | Goodpluck" />
      <Nav />

      <FormWrapper
        initialValues={{ email, zip }}
        onSubmit={() => {
          navigate(`https://airtable.com/shrs9WED21nlCwrrc?${formParams}`)
        }}
        FormContent={FormContent}
        header={`Unfortunately we don't deliver to ${city || zip || 'your area'} yet!`}
        percentComplete={0}
        submitText="Join Waitlist"
        goBackFunction={() => {
          navigate('/signup')
        }}
      />
    </>
  )
}
