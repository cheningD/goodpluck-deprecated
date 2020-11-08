import { MissiveChatConfig, SignedInData } from '../types'
import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { getSignedInData } from '../actions'
import { onboardingEmail } from '../store'
import { useRecoilValue } from 'recoil'

const MissiveChatBox = () => {
  const [missiveChatConfig, setMissiveChatConfig] = useState(null)
  const unverifiedEmail = useRecoilValue(onboardingEmail)

  useEffect(() => {
    async function fetchData() {
      const signedInData: SignedInData = await getSignedInData()

      if (signedInData) {
        const config: MissiveChatConfig = {
          id: '1ea1215d-b61c-4638-b7b1-65acdb00bd1c',
          user: {
            name: `${signedInData.signedInUser.first} ${signedInData.signedInUser.last}`,
            email: signedInData.signedInUser.email,
            digest: signedInData.missiveDigest,
          },
        }
        setMissiveChatConfig(config)
      } else {
        const unverifiedconfig: MissiveChatConfig = {
          id: '1ea1215d-b61c-4638-b7b1-65acdb00bd1c',
          user: {},
        }
        if (unverifiedEmail) {
          unverifiedconfig.user.email = unverifiedEmail
        }
        setMissiveChatConfig(unverifiedconfig)
      }
    }

    fetchData()
  }, [])

  if (typeof window === `undefined`) {
    return null
  }

  if (!missiveChatConfig) {
    return null
  }

  window.MissiveChatConfig = missiveChatConfig

  return (
    <Helmet>
      <script defer src={`https://webchat.missiveapp.com/${missiveChatConfig.id}/missive.js`}></script>
    </Helmet>
  )
}

export default MissiveChatBox
