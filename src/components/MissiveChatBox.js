import { Helmet } from "react-helmet"
import React from "react"
import { getMissiveChatConfig } from "../actions"

const MissiveChatBox = async () => {
  if (typeof window === `undefined`) {
    return ""
  }

  window.MissiveChatConfig = await getMissiveChatConfig()

  return (
    <Helmet>
      <script
        defer
        src={
          "https://webchat.missiveapp.com/" +
          window.MissiveChatConfig.id +
          "/missive.js"
        }
      ></script>
    </Helmet>
  )
}

export default MissiveChatBox
