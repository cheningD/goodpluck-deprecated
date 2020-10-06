import { Helmet } from "react-helmet"
import React from "react"

const MissiveChatBox = () => {
  if (typeof window === `undefined`) {
    return ""
  }

  window.MissiveChatConfig = {
    id: "1ea1215d-b61c-4638-b7b1-65acdb00bd1c",
  }

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
