import MissiveChatBox from "./src/components/MissiveChatBox"
import React from "react"
import { RecoilRoot } from "recoil"

export default ({ element }) => {
  return (
    <>
      <MissiveChatBox />
      <RecoilRoot>{element}</RecoilRoot>
    </>
  )
}
