import { BLACKOUT_DATES, isoToNiceDate } from '../util'
import { Bold, Card, H2, SecondaryButton, Spinner } from './StyledComponentLib'
import { HStack, Text } from '@chakra-ui/layout'

import { DateTime } from 'luxon'
import React from 'react'
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
  const sortedOrders = orders.map(order => {
    let orderCanBeSkipped = !order.paid && DateTime.fromISO(order.edit_end_date) >= DateTime.local()

    let editButton: JSX.Element

    if (BLACKOUT_DATES && BLACKOUT_DATES[order.order_index]) {
      editButton = <Text>{BLACKOUT_DATES[order.order_index]}</Text>
    } else if (orderCanBeSkipped) {
      editButton = (
        <SecondaryButton
          inline={true}
          as="button"
          onClick={async () => await setSkipped(order.order_index, !order.skipped)}
        >
          {order.skipped ? 'resume order' : 'skip'}
        </SecondaryButton>
      )
    } else {
      editButton = <Text>""</Text>
    }

    return (
      <UpcomingOrder skipped={order.skipped} key={order.order_index}>
        <HStack>
          <Text fontFamily="heading">{isoToNiceDate(order.delivery_date)}</Text> {order.skipped ? '(skipped) ' : ''}
          {editButton}
        </HStack>
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
