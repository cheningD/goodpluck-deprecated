import React from "react"
import ScriptTag from "react-script-tag"

const MissiveChatBox = () => {
  window.MissiveChatConfig = {
    id: "1ea1215d-b61c-4638-b7b1-65acdb00bd1c",
  }
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
