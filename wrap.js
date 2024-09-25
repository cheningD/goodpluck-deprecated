import React from 'react'
import { RecoilRoot } from 'recoil'

const Wrap = ({ element }) => {
  return (
    <>
      <RecoilRoot>{element}</RecoilRoot>
    </>
  )
}
export default Wrap
