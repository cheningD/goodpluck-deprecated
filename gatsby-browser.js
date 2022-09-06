import './src/styles/normalize.css'
import './src/styles/fonts.css'
import './src/styles/goodpluck.css'

import wrap from './wrap'

export const wrapRootElement = wrap

if (!process.env.GATSBY_STRIPE_API_PUBLIC_KEY) {
  throw new Error('Missing required env variable: GATSBY_STRIPE_API_PUBLIC_KEY')
}

if (!process.env.GATSBY_STAGING_STRIPE_API_PUBLIC_KEY) {
  throw new Error('Missing required env variable: GATSBY_STAGING_STRIPE_API_PUBLIC_KEY')
}

if (!process.env.GATSBY_REACT_APP_SUPABASE_URL) {
  throw new Error('Missing required env variable: GATSBY_REACT_APP_SUPABASE_URL')
}

if (!process.env.GATSBY_REACT_APP_SUPABASE_ANON_KEY) {
  throw new Error('Missing required env variable: GATSBY_REACT_APP_SUPABASE_ANON_KEY')
}
