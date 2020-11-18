import Footer from './src/components/footer'
import MissiveChatBox from './src/components/MissiveChatBox'
import React from 'react'
import { RecoilRoot } from 'recoil'

export default ({ element }) => {
  return (
    <>
      <RecoilRoot>
        <MissiveChatBox />
        {element}
      </RecoilRoot>
      <Footer />
    </>
  )
}
