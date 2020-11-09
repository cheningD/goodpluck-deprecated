import { basketItems, setItemQuantity } from '../store'

import Chevron from './Chevron'
import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

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

const StyledChevron = styled(Chevron)`
  padding-right: 8px;
  padding-top: 4px;
`

const AddToCartButton = ({ stripePriceId, unitPriceInCents }) => {
  const [basket, setBasket] = useRecoilState(basketItems)

  if (basket === null) {
    return null
  }

  let quantityInBasket = basket.get(stripePriceId)?.quantity || 0

  if (quantityInBasket === 0) {
    return (
      <Submit as="button" onClick={async () => await setItemQuantity(stripePriceId, 1, unitPriceInCents, setBasket)}>
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
      onChange={async option => await setItemQuantity(stripePriceId, option.value, unitPriceInCents, setBasket)}
      isSearchable={false}
      components={{
        IndicatorSeparator: null,
        DropdownIndicator: () => <StyledChevron direction="down" />,
      }}
      value={{
        label: `Quantity: ${quantityInBasket}`,
        value: quantityInBasket,
      }}
    />
  )
}

export default AddToCartButton
