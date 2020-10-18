import {
  Card,
  DetailCell2,
  Header,
  LineBreak,
} from "../components/StyledComponentLib"

import BasketItem from "../components/BasketItem"
import React from "react"
import styled from "styled-components"

const BasketContainer = styled.div`
  padding: 16px;
  font-weight: 500;
  max-width: 500px;
  margin: 32px auto;
`

const H1 = styled(Header)`
  color: #000;
  margin-bottom: 16px;
`

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const shippingText = "$6.99"
const subtotalText = "$25.00"
const totalText = "$35.00"

const Basket = ({ deliveryDate, orderFrequency }) => {
  return (
    <BasketContainer>
      <H1>My Basket</H1>
      <Card>
        <DetailCell2>Arrives on:</DetailCell2>
        <DetailCell2 right>{deliveryDate}</DetailCell2>
        <DetailCell2>Order frequency:</DetailCell2>
        <DetailCell2 right>{orderFrequency}</DetailCell2>
        <LineBreak />

        <BasketItem
          quantityLabel="1 pint"
          name="Cherry Tomatoes"
          oneLiner="could be the last batch of the season"
          priceLabel="$5.00"
        />
        <ThinLineBreak />
        <BasketItem
          quantityLabel="1"
          name="Organic Delicata Squash"
          oneLiner="cooks quicker than other squashes"
          priceLabel="$3.00"
        />
        <ThinLineBreak />
        <BasketItem
          quantityLabel="8 oz"
          name="Mixed Salad Greens"
          oneLiner="sweet and spicy"
          priceLabel="$9.00"
        />

        <LineBreak />
        <DetailCell2>Shipping</DetailCell2>
        <DetailCell2 right>{shippingText}</DetailCell2>
        <DetailCell2>Subtotal</DetailCell2>
        <DetailCell2 right>{subtotalText}</DetailCell2>
        <DetailCell2 bold>Total</DetailCell2>
        <DetailCell2 bold right>
          {totalText}
        </DetailCell2>
      </Card>
    </BasketContainer>
  )
}
export default Basket
