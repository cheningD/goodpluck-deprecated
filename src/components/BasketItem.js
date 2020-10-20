import AddToCartButton from "../components/AddToCartButton"
import Chevron from "../components/Chevron"
import Image from "../components/Image"
import React from "react"
import styled from "styled-components"

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
`

const ImageContainer = styled.div`
  width: 64px;
  height: 64px;
`
const ItemImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 4px;
`

const Product = styled.div`
  padding-left: 16px;
  font-family: hk_groteskregular, sans-serif;
  font-size: 1rem;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.25rem;
  font-family: hk_grotesksemibold, sans-serif;
`
const QuantityLabel = styled.span`
  color: #6c7668;
`

const ChevronSmall = styled(Chevron)`
  font-size: 0.75rem;
`

const Description = styled.div`
  color: #333;
  margin-bottom: 8px;
`

const Controls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`

const Price = styled.span`
  color: #6c7668;
  font-family: hk_grotesksemibold, sans-serif;
`

const MichiganIcon = styled(Image)`
  width: 20px;
  height: 20px;
  display: inline-block;
`

const AddToCart = styled(AddToCartButton)`
  display: inline-block;
`
const BasketItem = ({ quantityLabel, name, oneLiner, priceLabel, canEdit }) => {
  let controls = ""
  if (canEdit) {
    controls = (
      <Controls>
        <AddToCart
          onChange={options => {
            console.info("---->options", options)
          }}
          quantity={3}
        />
        <Price>{priceLabel}</Price>
      </Controls>
    )
  }

  return (
    <ItemContainer>
      <ImageContainer>
        <ItemImage src="placeholder.jpg" alt="placeholder-image" />
      </ImageContainer>
      <Product>
        <Title>
          <QuantityLabel>{quantityLabel} </QuantityLabel>
          {name} <MichiganIcon src="mitten.png" alt="grown in michigan" />
        </Title>
        <Description>
          {oneLiner}
          <ChevronSmall direction="down" />
        </Description>
        {controls}
      </Product>
    </ItemContainer>
  )
}
export default BasketItem
