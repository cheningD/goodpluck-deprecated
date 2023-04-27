import { Bold, PrimaryButton } from '../components/StyledComponentLib'

import { DateTime } from 'luxon'
import React from 'react'
import { isoToNiceDate } from '../util'

const BasketSkippedCard = ({ setSkipped, deliveryDate, mondayOfOrderDateString, edit_end_date }) => {
  return (
    <span>
      You are <Bold>skipping</Bold> this week's basket.
      <div>
        You won't be charged or recieve a basket on <Bold>{isoToNiceDate(deliveryDate)}</Bold>{' '}
      </div>
      <span>
        You can <Bold>unskip</Bold> your basket before{' '}
        <Bold>{DateTime.fromISO(edit_end_date).toFormat('ccc, LLL dd')}</Bold>
      </span>
      <PrimaryButton as="button" type="button" onClick={async () => await setSkipped(mondayOfOrderDateString, false)}>
        Un-skip this basket
      </PrimaryButton>
    </span>
  )
}

export default BasketSkippedCard
