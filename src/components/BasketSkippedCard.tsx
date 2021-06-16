import { Bold, PrimaryButton } from '../components/StyledComponentLib'

import React from 'react'
import { isoToNiceDate } from '../util'

const BasketSkippedCard = ({ setSkipped, deliveryDate, mondayOfOrderDateString }) => {
  return (
    <span>
      You are <Bold>skipping</Bold> this week's basket.
      <div>
        You won't be charged or recieve a basket on <Bold>{isoToNiceDate(deliveryDate)}</Bold>{' '}
      </div>
      <PrimaryButton as="button" type="button" onClick={async () => await setSkipped(mondayOfOrderDateString, false)}>
        Un-skip this basket
      </PrimaryButton>
    </span>
  )
}

export default BasketSkippedCard
