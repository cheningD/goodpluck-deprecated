import {
  Card,
  DetailCell2,
  Header,
  LineBreak,
} from "../components/StyledComponentLib"

import BasketItem from "../components/BasketItem"
import React from "react"
import styled from "styled-components"

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const Message = styled(Header)`
  color: #000;
  font-size: 1rem;
  padding: 8px 100px;
  margin: 0;
`

const shippingText = "Free"
const subtotalText = "$35.00"
const totalText = "$35.00"

const Basket = ({ deliveryDate, orderFrequency, canEdit }) => {
  return (
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
        canEdit={canEdit}
        image="im1cherrytomato.png"
      />
      <ThinLineBreak />
      <BasketItem
        quantityLabel="1"
        name="Organic Delicata Squash"
        oneLiner="cooks quicker than other squashes"
        priceLabel="$3.00"
        canEdit={canEdit}
        image="im1squash.png"
      />
      <ThinLineBreak />
      <BasketItem
        quantityLabel="8 oz"
        name="Mixed Salad Greens"
        oneLiner="sweet and spicy"
        priceLabel="$9.00"
        canEdit={canEdit}
        image="im1salad.png"
      />
      <ThinLineBreak />

      <Message>+10 more seasonal items...</Message>

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
  )
}
export default Basket
