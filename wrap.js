import React, { ReactNode, useEffect } from 'react'

import MissiveChatBox from './src/components/MissiveChatBox'
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
