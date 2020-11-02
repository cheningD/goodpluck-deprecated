import MissiveChatBox from "./src/components/MissiveChatBox"
import React from "react"
import { RecoilRoot } from "recoil"

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <MissiveChatBox />
      {element}
    </RecoilRoot>
  )
}
