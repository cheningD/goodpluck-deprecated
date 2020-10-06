import React from "react"
import ScriptTag from "react-script-tag"

const MissiveChatBox = () => {
  if (typeof window === `undefined`) {
    return ""
  }

  window.MissiveChatConfig = {
    id: "1ea1215d-b61c-4638-b7b1-65acdb00bd1c",
  }
  console.log("Settuing up chat box")

  return (
    <ScriptTag
      src={
        "https://webchat.missiveapp.com/" +
        window.MissiveChatConfig.id +
        "/missive.js"
      }
    ></ScriptTag>
  )
}

export default MissiveChatBox
