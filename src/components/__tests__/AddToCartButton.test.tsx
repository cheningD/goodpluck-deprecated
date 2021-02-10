import React from 'react'
import selectEvent from 'react-select-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import AddToCartButton from '../AddToCartButton'
import { render } from '../../../test-utils'
import * as actions from '../../actions'
import { LOCAL_API_PREFIX } from '../../actions'
import { basketItems } from '../../store'

const STRIPE_PRICE_ID = '1'

const defaultProps = {
  stripePriceId: STRIPE_PRICE_ID,
  unitPriceInCents: '20',
  quantityInBasket: 1,
}

/* API calls */

const server = setupServer(
  rest.post(`${LOCAL_API_PREFIX}/api/basket`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            stripePriceId: '1',
            quantity: 5,
            unitPriceInCents: 5,
          },
        ],
      }),
    )
  }),
)

describe('AddToCartButton', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('renders correctly', () => {
    const { container } = render(<AddToCartButton {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders add button when quantityInBasket is 0', () => {
    const props = {
      ...defaultProps,
      quantityInBasket: 0,
    }
    const { getByText } = render(<AddToCartButton {...props} />)
    expect(getByText('Add')).toBeTruthy()
  })

  it('renders the select with options when quantityInBasket is greater than 0', () => {
    const props = {
      ...defaultProps,
      quantityInBasket: 1,
    }
    const { getByLabelText } = render(<AddToCartButton {...props} />)
    expect(getByLabelText('add to cart')).toBeTruthy()
  })

  it('removes the item from basket when selecting option with value 0', async () => {
    const mockedUpdateBasket = jest.spyOn(actions, 'updateBasket')
    const props = {
      ...defaultProps,
      quantityInBasket: 1,
    }
    const basketItem = new Map()
    basketItem.set(STRIPE_PRICE_ID, {
      stripePriceId: STRIPE_PRICE_ID,
      quantity: 1,
      unitPriceInCents: 10,
    })
    const { container, getByLabelText } = render(<AddToCartButton {...props} />, null, [
      {
        atom: basketItems,
        value: basketItem,
      },
    ])
    await selectEvent.select(getByLabelText('add to cart'), ['0 (Remove)'])
    const params = mockedUpdateBasket.mock.calls[0][0]
    expect(mockedUpdateBasket).toHaveBeenCalledTimes(1)
    expect(params.size).toEqual(0)
  })
  it('updates the item from basket when selecting option with value greater than 0', async () => {
    const mockedUpdateBasket = jest.spyOn(actions, 'updateBasket')
    const props = {
      ...defaultProps,
      quantityInBasket: 5,
    }
    const basketItem = new Map()
    basketItem.set(STRIPE_PRICE_ID, {
      stripePriceId: STRIPE_PRICE_ID,
      quantity: 1,
      unitPriceInCents: 10,
    })
    const { container, getByLabelText } = render(<AddToCartButton {...props} />, null, [
      {
        atom: basketItems,
        value: basketItem,
      },
    ])
    await selectEvent.select(getByLabelText('add to cart'), ['5'])
    const params = mockedUpdateBasket.mock.calls[0][0]
    expect(mockedUpdateBasket).toHaveBeenCalledTimes(1)
    expect(params.get(STRIPE_PRICE_ID).quantity).toEqual(5)
  })
})
