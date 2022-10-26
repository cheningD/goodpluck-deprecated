import { BasketItemData, OrderDetail, OrderSupabase } from '../types'
import { Button, Text } from '@chakra-ui/react'
import { basketItems, myOrders } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import { DateTime } from 'luxon'
import React from 'react'
import Select from 'react-select'
import { updateBasket } from '../actions'

const AddToCartButton = ({ stripePriceId, unitPriceInCents, quantityInBasket, canEdit }) => {
  if (!canEdit) {
    return <Text>Qty: {quantityInBasket || 0}</Text>
  }
  const orders = useRecoilValue(myOrders) as OrderSupabase[] | null
  let upcomingOrderData: OrderSupabase | null = null
  if (orders && orders.length > 0) {
    //Get the earliest order
    upcomingOrderData = orders.slice().sort((a, b) => (a.order_index < b.order_index ? -1 : 1))[0]
  }

  // If editBasketEndDate is in the past, dont let them edit....
  if (upcomingOrderData && DateTime.fromISO(upcomingOrderData.edit_end_date) < DateTime.local()) {
    return <div>{`Quantity: ${quantityInBasket}`}</div>
  }

  const [basket, _setBasket] = useRecoilState(basketItems)
  const setBasket = async (basket: Map<string, BasketItemData>) => {
    updateBasket(basket)
    _setBasket(basket)
  }
  if (quantityInBasket === 0) {
    return (
      <Button
        w="103px"
        variant="outline"
        colorScheme="brand"
        borderRadius="4px"
        _hover={{ bg: 'brand.400', color: 'white' }}
        onClick={() => {
          let newBasket: Map<string, BasketItemData> = new Map(basket)
          newBasket.set(stripePriceId, { stripePriceId, quantity: 1, unitPriceInCents })
          setBasket(newBasket)
        }}
      >
        Add
      </Button>
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
    <Select
      options={options}
      onChange={option => {
        let newBasket: Map<string, BasketItemData> = new Map(basket)
        if (option.value === 0) {
          newBasket.delete(stripePriceId)
          setBasket(newBasket)
        } else {
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
      aria-label="add to cart"
    />
  )
}

export default AddToCartButton
