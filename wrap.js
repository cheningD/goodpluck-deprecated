import MissiveChatBox from './src/components/MissiveChatBox'
import React from 'react'
import { RecoilRoot } from 'recoil'

const Wrap = ({ element }) => {
  return (
    <>
      <RecoilRoot>
        <MissiveChatBox />
        {element}
      </RecoilRoot>
    </>
  )
}
export default Wrap
