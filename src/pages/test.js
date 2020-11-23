import { Error, SubmitButton } from '../components/StyledComponentLib'
import React, { useState } from 'react'

import SEO from '../components/SEO'
import { signInAsTestUser } from '../actions'

export default function Test() {
  const [result, setResult] = useState('')
  if (process.env.GATSBY_DEPLOY_ENVIRONMENT !== 'DEVELOPMENT') {
    return null
  }

  return (
    <div>
      <SEO title="Localhost Testing Page | Goodpluck" />
      <h1>Localhost Testing Page</h1>
      <div>Currently you are always signed in as testuser@goodpluck.com on localhost</div>
      <SubmitButton as="button" onClick={async () => setResult(JSON.stringify(await signInAsTestUser()))}>
        See signed in response for testuser@goodpluck.com
      </SubmitButton>
      {result ? <Error>{result}</Error> : ''}
    </div>
  )
}
