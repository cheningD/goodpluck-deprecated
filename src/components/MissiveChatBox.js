import React, { useEffect, useState } from "react"

import { Helmet } from "react-helmet"
import { getMissiveChatConfig } from "../actions"

const MissiveChatBox = () => {
  const [missiveChatConfig, setMissiveChatConfig] = useState()

  useEffect(() => {
    async function fetchData() {
      const chatConfig = await getMissiveChatConfig()
      setMissiveChatConfig(chatConfig)
    }
    fetchData()
  }, [])

  if (typeof window === `undefined`) {
    return
  }

  if (!missiveChatConfig) {
    return
  }

  window.MissiveChatConfig = missiveChatConfig

  return (
    <Helmet>
      <script
        defer
        src={`https://webchat.missiveapp.com/${missiveChatConfig.id}/missive.js`}
      ></script>
    </Helmet>
  )
}

export default MissiveChatBox
