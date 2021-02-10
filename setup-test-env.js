import '@testing-library/jest-dom/extend-expect'
import 'whatwg-fetch'
import React from 'react'

jest.mock('@reach/router', () => ({
  useLocation: jest.fn(() => 'pathname'),
}))

jest.mock('@stripe/stripe-js', () => ({
  loadStripe: () => ({
    createPaymentMethod: jest.fn(),
  }),
}))

const elementMock = {
  mount: jest.fn(),
  destroy: jest.fn(),
  on: jest.fn(),
  update: jest.fn(),
}

const mockElement = () => ({
  mount: jest.fn(),
  destroy: jest.fn(),
  on: jest.fn(),
  update: jest.fn(),
})

const mockElements = () => {
  const elements = {}
  return {
    create: jest.fn(type => {
      elements[type] = mockElement()
      return elements[type]
    }),
    getElement: jest.fn(type => {
      return elements[type] || null
    }),
  }
}

export const mockStripe = {
  elements: jest.fn().mockReturnValue(mockElement),
  createToken: jest.fn(() => Promise.resolve()),
  createSource: jest.fn(() => Promise.resolve()),
  createPaymentMethod: jest.fn(),
  confirmCardPayment: jest.fn(),
  confirmCardSetup: jest.fn(() => Promise.resolve()),
  paymentRequest: jest.fn(),
  _registerWrapper: jest.fn(),
}

window.Stripe = jest.fn().mockReturnValue(mockStripe)

jest.mock('@stripe/react-stripe-js', () => {
  const stripe = jest.requireActual('@stripe/react-stripe-js')

  return {
    ...stripe,
    CardElement: () => {
      return <div>CardElement</div>
    },
    Elements: ({ children }) => {
      return <div>{children}</div>
    },
    Element: () => {
      return mockElement
    },
    useStripe: () => mockStripe,
    useElements: mockElements,
  }
})
