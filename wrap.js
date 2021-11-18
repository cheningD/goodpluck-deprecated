import Footer from './src/components/footer'
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
      <Footer />
    </>
  )
}
export default Wrap
