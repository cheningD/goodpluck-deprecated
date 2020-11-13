import * as Sentry from '@sentry/browser'

import React from 'react'
import SEO from '../components/SEO'

export default function Test() {
  return (
    <div onClick={() => window.throwErrorTestSentry()}>
      <SEO title="Hi There" />
      404. Not Found
    </div>
  )
}
