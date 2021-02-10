import { DateTime } from 'luxon'
import React from 'react'

import { render } from '../../../test-utils'
import { myOrders, signedInUser } from '../../store'
import Basket from '../basket'

describe('Basket', () => {
  describe('when not authenticated', () => {
    it('shows the signin link when user is not authenticated', () => {
      const { getByText } = render(<Basket />, null, [
        {
          atom: signedInUser,
          value: null,
        },
      ])
      expect(getByText('sign in')).toBeTruthy()
    })
  })
  describe('when authenticated', () => {
    it('shows a spinner when upcoming order data is not available', () => {
      const { getByTestId } = render(<Basket />, null, [
        {
          atom: signedInUser,
          value: {
            email: 'test@test.com',
          },
        },
        {
          atom: myOrders,
          value: [],
        },
      ])
      expect(getByTestId('spinner')).toBeTruthy()
    })
    it('shows the count down timer if the current time is less than upcoming basket start time', () => {
      const { getByTestId } = render(<Basket />, null, [
        {
          atom: signedInUser,
          value: {
            email: 'test@test.com',
          },
        },
        {
          atom: myOrders,
          value: {
            '2020-12-28': {
              amountReceivedInCents: null,
              basket: null,
              cancelledReason: null,
              chargedDate: '2021-01-01T00:00:00.000-05:00',
              chargedStatus: null,
              deliveredStatus: null,
              deliveryDate: '2021-01-02T00:00:00.000-05:00',
              editBasketEndDate: DateTime.local().plus({ day: 1 }).toISO(),
              editBasketStartDate: DateTime.local().plus({ day: 1 }).toISO(),
              editStatus: 'active',
              isCancelled: false,
              isFullfilled: false,
              isPaused: false,
              mondayOfOrderDateString: '2020-12-28',
              paid: null,
              paymentID: null,
              scheduledStatus: 'done',
            },
          },
        },
      ])
      expect(getByTestId('countdown')).toBeTruthy()
    })
    it('shows the basket in not editable state if the time to edit the basket has exceeded', () => {
      const { getByText } = render(<Basket />, null, [
        {
          atom: signedInUser,
          value: {
            email: 'test@test.com',
          },
        },
        {
          atom: myOrders,
          value: {
            '2020-12-28': {
              amountReceivedInCents: null,
              basket: null,
              cancelledReason: null,
              chargedDate: '2021-01-01T00:00:00.000-05:00',
              chargedStatus: null,
              deliveredStatus: null,
              deliveryDate: '2021-01-02T00:00:00.000-05:00',
              editBasketEndDate: DateTime.local().minus({ day: 1 }).toISO(),
              editBasketStartDate: DateTime.local().minus({ day: 1 }).toISO(),
              editStatus: 'active',
              isCancelled: false,
              isFullfilled: false,
              isPaused: false,
              mondayOfOrderDateString: '2020-12-28',
              paid: null,
              paymentID: null,
              scheduledStatus: 'done',
            },
          },
        },
      ])
      expect(getByText('Your order is being finalized now.')).toBeTruthy()
      // TODO: could add test to see if basket item is rendered based on canEdit flag set to false. Not doing this as this prop is later is later not used
    })
    it('shows the basket in editable state if none of the above conditions are met', () => {
      const { getByTestId } = render(<Basket />, null, [
        {
          atom: signedInUser,
          value: {
            email: 'test@test.com',
          },
        },
        {
          atom: myOrders,
          value: {
            '2020-12-28': {
              amountReceivedInCents: null,
              basket: null,
              cancelledReason: null,
              chargedDate: '2021-01-01T00:00:00.000-05:00',
              chargedStatus: null,
              deliveredStatus: null,
              deliveryDate: '2021-01-02T00:00:00.000-05:00',
              editBasketEndDate: DateTime.local().plus({ day: 1 }).toISO(),
              editBasketStartDate: DateTime.local().minus({ day: 1 }).toISO(),
              editStatus: 'active',
              isCancelled: false,
              isFullfilled: false,
              isPaused: false,
              mondayOfOrderDateString: '2020-12-28',
              paid: null,
              paymentID: null,
              scheduledStatus: 'done',
            },
          },
        },
      ])
      expect(getByTestId('editable-basket')).toBeTruthy()
    })
  })
})
