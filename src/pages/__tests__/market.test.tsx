import React from 'react'
import { DateTime } from 'luxon'

import { render } from '../../../test-utils'
import { signedInUser, myOrders } from '../../store'
import Market from '../market'

describe('Market', () => {
  beforeEach(() => jest.clearAllMocks())

  it('shows a spinner when not signed in', () => {
    const { getByTestId } = render(<Market />, null, [
      {
        atom: signedInUser,
        value: null,
      },
    ])
    expect(getByTestId('spinner')).toBeTruthy()
  })

  it('shows countdown when the upcoming order is available', () => {
    const sampleDateTime = DateTime.local().set({ year: 2015, hour: 18 })
    const { getByTestId } = render(<Market />, null, [
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
            editBasketEndDate: DateTime.local().plus({ days: 2 }).toISO(),
            editBasketStartDate: DateTime.local().plus({ days: 2 }).toISO(),
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

  it('shows market card when none of the above conditions are met', () => {
    const sampleDateTime = DateTime.local().set({ year: 2025 })
    jest.spyOn(DateTime, 'local').mockImplementation(() => sampleDateTime)

    // To mock for the case where market card is shown
    const { getByTestId } = render(<Market />, null, [
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
            editBasketEndDate: new Date().toISOString(),
            editBasketStartDate: new Date().toISOString(),
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
    expect(getByTestId('market-card')).toBeTruthy()
  })
})
