import { BasketItemData, OrderDetail } from '../types'
import { basketItems, myOrders } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import { DateTime } from 'luxon'
import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { updateBasket } from '../actions'

const Submit = styled.button`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid hsl(0, 0%, 80%);
  color: #333;
  display: inline-block;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 0.875rem;
  height: 38px;
  margin-right: 16px;
  width: 7rem;

  &:hover,
  &:focus {
    background-color: #788474;
    color: #fff;
  }
`

const AddToCartSelect = styled(Select)`
  display: inline-block;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 0.875rem;
  margin-right: 16px;
  width: 7rem;
`

const AddToCartButton = ({ stripePriceId, unitPriceInCents, quantityInBasket }) => {
  const orders = useRecoilValue(myOrders)

  let upcomingOrderData: OrderDetail | null = null
  if (orders && Object.keys(orders).length > 0) {
    upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
  }

  let canEditBasket: boolean = true
  let basketConfirmationMessage = ''
  const dateNow = DateTime.local()

  // If editBasketEndDate is in the past, dont let them edit....
  if (upcomingOrderData && DateTime.fromISO(upcomingOrderData.editBasketEndDate) < DateTime.local()) {
    return <div>{`Quantity: ${quantityInBasket}`}</div>
  }

  const [basket, _setBasket] = useRecoilState(basketItems)
  const setBasket = async (basket: Map<string, BasketItemData>) => {
    updateBasket(basket)
    _setBasket(basket)
  }
  if (quantityInBasket === 0) {
    return (
      <Submit
        as="button"
        onClick={() => {
          let newBasket: Map<string, BasketItemData> = new Map(basket)
          newBasket.set(stripePriceId, { stripePriceId, quantity: 1, unitPriceInCents })
          setBasket(newBasket)
        }}
      >
        Add
      </Submit>
    )
  }

  const options = [
    { value: 0, label: '0 (Remove)' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
  ]

  return (
    <AddToCartSelect
      classNamePrefix="add-to-cart-select"
      options={options}
      onChange={option => {
        if (option.value === 0) {
          let newBasket: Map<string, BasketItemData> = new Map(basket)
          newBasket.delete(stripePriceId)
          setBasket(newBasket)
        } else {
          let newBasket: Map<string, BasketItemData> = new Map(basket)
          newBasket.set(stripePriceId, { stripePriceId, quantity: option.value, unitPriceInCents })
          setBasket(newBasket)
        }
      }}
      isSearchable={false}
      components={{
        IndicatorSeparator: null,
      }}
      value={{
        label: `Qty: ${quantityInBasket}`,
        value: quantityInBasket,
      }}
    />
  )
}

export default AddToCartButton
