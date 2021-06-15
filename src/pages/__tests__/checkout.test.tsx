import * as actions from '../../actions'

import CheckoutPage, { CheckoutForm } from '../checkout'
import { act, fireEvent, render, waitFor } from '../../../test-utils'
import { findByTestId, queryByTestId, waitForElementToBeRemoved } from '@testing-library/react'

import { DateTime } from 'luxon'
import React from 'react'
import { mockStripe } from '../../../setup-test-env'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event'

const { LOCAL_API_PREFIX } = actions
const server = setupServer(
  rest.get(`${LOCAL_API_PREFIX}/api/orders/demo`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          amountReceivedInCents: null,
          basket: null,
          cancelledReason: null,
          chargedDate: '2021-01-01T00:00:00.000-05:00',
          chargedStatus: null,
          deliveredStatus: null,
          deliveryDate: '2021-01-02T00:00:00.000-05:00',
          editBasketEndDate: '2020-12-31T23:59:59.000-05:00',
          editBasketStartDate: '2020-12-28T00:00:00.000-05:00',
          editStatus: 'active',
          isCancelled: false,
          isFullfilled: false,
          skipped: false,
          mondayOfOrderDateString: '2020-12-28',
          paymentID: null,
          scheduledStatus: 'done',
        },
      }),
    )
  }),
  rest.post(`${LOCAL_API_PREFIX}/api/createuser`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          createCustomerResponseJSON: {
            id: '',
            object: '',
            client_secret: '',
          },
          createSetupIntentResponseJSON: {
            client_secret: '',
          },
          message: '',
          missiveDigest: '',
          signedInUser: {},
        },
        message: 'message',
      }),
    )
  }),
)

const inputFieldList = {
  first: {
    required: 'Please enter your first name',
  },
  last: {
    required: 'Please enter your last name',
  },
  email: {
    required: 'Please enter your email',
    pattern: "That email doesn't look right",
  },
  addressLine1: {
    required: 'Where should we send your box?',
  },
  addressLine2: {
    length: 'Too Long!',
  },
  phone: {
    required: 'Only required for delivery updates',
  },
  zip: {
    required: 'We need your 5 digit zip!',
    pattern: "That doesn't look quite right. Please enter your 5-digit zip code.",
  },
}

describe('CheckoutPage', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('renders the page correctly', () => {
    const { getByText, getAllByText, getByTestId } = render(<CheckoutPage />)
    expect(getByText('Finish Creating Your Account')).toBeInTheDocument()
    // Because there are two components rendered and media query cannot be tested
    expect(getAllByText('Your Upcoming Basket')).toHaveLength(2)
    expect(getByTestId('delivery-preferences-link')).toHaveAttribute('href', '/getstarted#deliveryPreferences')
  })

  it('shows error in form when the stripe createToken is unsuccessful', async () => {
    mockStripe.createToken.mockResolvedValue({
      error: {
        code: 'incomplete_number',
        message: 'Your card number is incomplete.',
        type: 'validation_error',
      },
    })

    await act(async () => {
      const { getByText, findByTestId } = render(<CheckoutPage />)

      const inputFieldName = Object.keys(inputFieldList)
      for await (const fieldName of inputFieldName) {
        {
          const inputElement = await findByTestId(`textinput-${fieldName}`)

          if (fieldName === 'email') {
            userEvent.type(inputElement, 'test@test.com')
          } else if (fieldName === 'zip') {
            userEvent.type(inputElement, '12234')
          } else {
            userEvent.type(inputElement, 'abc')
          }
        }
      }
      fireEvent.click(getByText('Confirm Order And Customize Basket'))
      const stripeError = await findByTestId('stripe-error')
      expect(stripeError).toBeInTheDocument()
      expect(stripeError.textContent).toEqual('Your card number is incomplete.')
    })
  })

  it('call createUser when the stripe createToken is successful', async done => {
    mockStripe.createToken.mockResolvedValue({
      token: {
        id: '',
      },
    })
    mockStripe.confirmCardSetup.mockResolvedValue({
      error: {},
    })
    const createUserMock = jest.fn().mockResolvedValue({
      data: {
        createCustomerResponseJSON: {
          id: '',
          object: '',
          client_secret: '',
        },
        createSetupIntentResponseJSON: {
          client_secret: '',
        },
        message: '',
        missiveDigest: '',
        signedInUser: {},
      },
      message: 'message',
    })
    jest.spyOn(actions, 'createUser').mockImplementation(createUserMock)

    await act(async () => {
      const { getByText, findByTestId } = render(<CheckoutPage />)

      const inputFieldName = Object.keys(inputFieldList)
      for await (const fieldName of inputFieldName) {
        {
          const inputElement = await findByTestId(`textinput-${fieldName}`)

          if (fieldName === 'email') {
            userEvent.type(inputElement, 'test@test.com')
          } else if (fieldName === 'zip') {
            userEvent.type(inputElement, '12234')
          } else {
            userEvent.type(inputElement, 'abc')
          }
        }
      }
      fireEvent.click(getByText('Confirm Order And Customize Basket'))
      await waitFor(() => {
        expect(createUserMock).toHaveBeenCalledTimes(1)
        expect(createUserMock).toHaveBeenCalledWith({
          addressLine1: 'abc',
          addressLine2: 'abc',
          email: 'test@test.com',
          first: 'abc',
          last: 'abc',
          phone: 'abc',
          zip: '12234',
          stripeToken: '',
          orderFrequency: 'every week',
          notifyDeliveryDates: false,
          shoppingFor: [],
          myCauses: [],
        })
        expect(mockStripe.confirmCardSetup).toHaveBeenCalledTimes(1)
        done()
      })
    })
  })
})

describe('CheckoutForm', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('does the validation correctly', async () => {
    const onSubmitMock = jest.fn()
    const handleChangeStripeMock = jest.fn()
    const { getByTestId, findByTestId } = render(
      <CheckoutForm onSubmit={onSubmitMock} handleChangeStripe={handleChangeStripeMock} stripeError={null} />,
    )
    await act(async () => {
      for await (const inputFieldName of Object.keys(inputFieldList)) {
        const inputField = inputFieldList[inputFieldName]
        const inputElement = getByTestId(`textinput-${inputFieldName}`)
        if (inputField.required) {
          fireEvent.blur(inputElement)
          const validationError = await findByTestId(`error-${inputFieldName}`)
          expect(validationError.textContent).toEqual(inputField.required)
        }
        if (inputField.pattern) {
          if (inputFieldName === 'email') {
            userEvent.type(inputElement, 'a')
            const validationError = await findByTestId(`error-${inputFieldName}`)
            await waitFor(() => {
              expect(validationError.textContent).toEqual(inputField.pattern)
            })
          }
          if (inputFieldName === 'zip') {
            userEvent.type(inputElement, '123')
            const validationError = await findByTestId(`error-${inputFieldName}`)
            await waitFor(() => {
              expect(validationError.textContent).toEqual(inputField.pattern)
            })
          }
        }
      }
    })
  })
  it('submits the form when the form is valid', async done => {
    const onSubmitMock = jest.fn()
    const handleChangeStripeMock = jest.fn()
    await act(async () => {
      const { findByTestId, getByText } = render(
        <CheckoutForm onSubmit={onSubmitMock} handleChangeStripe={handleChangeStripeMock} stripeError={null} />,
      )
      const inputFieldName = Object.keys(inputFieldList)
      for await (const fieldName of inputFieldName) {
        {
          const inputElement = await findByTestId(`textinput-${fieldName}`)

          if (fieldName === 'email') {
            userEvent.type(inputElement, 'test@test.com')
          } else if (fieldName === 'zip') {
            userEvent.type(inputElement, '12234')
          } else {
            userEvent.type(inputElement, 'abc')
          }
        }
      }
      fireEvent.click(getByText('Confirm Order And Customize Basket'))
      await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalled()
        done()
      })
    })
  })
})
