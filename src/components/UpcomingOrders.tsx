import { Bold, Card, H2, SecondaryButton, Spinner } from './StyledComponentLib'

import { DateTime } from 'luxon'
import React from 'react'
import { isoToNiceDate } from '../util'
import styled from 'styled-components'

interface UpcomingOrderProps {
  skipped: boolean
}

const UpcomingOrder = styled.div<UpcomingOrderProps>`
  margin-bottom: 8px;
  ${props =>
    props.skipped
      ? `
    color: var(--secondary-text);
  `
      : ''}
`

const UpcomingOrders = ({ orders, setSkipped }) => {
  if (!orders) {
    return <Spinner color="var(--peach-bg)" />
  }
  const sortedOrders = Object.keys(orders)
    .slice()
    .sort()
    .slice(0, 5) //limit to 5 results
    .map(orderIndexMonday => {
      const order = orders[orderIndexMonday]
      let orderIsSkipped = order.skipped || false
      let orderCanBeSkipped = !order.paid && DateTime.fromISO(order.editBasketEndDate) >= DateTime.local()

      let editButton: JSX.Element

      if (orderCanBeSkipped) {
        editButton = (
          <SecondaryButton
            inline={true}
            as="button"
            onClick={async () => await setSkipped(orderIndexMonday, !orderIsSkipped)}
          >
            {orderIsSkipped ? 'resume order' : 'skip'}
          </SecondaryButton>
        )
      }

      return (
        <UpcomingOrder skipped={orderIsSkipped} key={orderIndexMonday}>
          <Bold>{isoToNiceDate(order.deliveryDate)}</Bold> {orderIsSkipped ? '(skipped) ' : ''}
          {editButton}
        </UpcomingOrder>
      )
    })
  return (
    <>
      <H2>Upcoming Orders</H2>
      <Card>{sortedOrders}</Card>
    </>
  )
}

export default UpcomingOrders
