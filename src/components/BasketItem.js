import AddToCartButton from "../components/AddToCartButton"
import Image from "../components/Image"
// import Chevron from "../components/Chevron"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
`

const ImageContainer = styled.div`

  width: ${props => (props.isCompact ? "64px;" : "100px;")}
  height: ${props => (props.isCompact ? "64px;" : "100px;")}
  
`
const ItemImage = styled(Image)`
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

// const ChevronSmall = styled(Chevron)`
//   font-size: 0.75rem;
// `

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

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  display: inline-block;
`

const AddToCart = styled(AddToCartButton)`
  display: inline-block;
`
const BasketItem = ({
  quantityLabel,
  name,
  oneLiner,
  priceLabel,
  canEdit,
  imageSrc,
  quantityInCart,
  isOrganic,
  isLocal,
  isInSeason,
  childImageSharp,
  isCompact,
}) => {
  let controls = ""
  if (canEdit) {
    controls = (
      <Controls>
        <AddToCart
          onChange={options => {
            console.info("---->options", options)
          }}
          quantity={quantityInCart}
        />
        <Price>{priceLabel}</Price>
      </Controls>
    )
  }
  let image = ""
  if (childImageSharp) {
    image = <Img fluid={childImageSharp.fluid} alt={name} />
  } else {
    image = (
      <ItemImage src={imageSrc || "placeholder.jpg"} alt="placeholder-image" />
    )
  }

  return (
    <ItemContainer>
      <ImageContainer isCompact>{image}</ImageContainer>
      <Product>
        <Title>
          <QuantityLabel>{quantityLabel} </QuantityLabel>
          {name}{" "}
          {isLocal ? <Icon src="mitten.png" alt="grown in michigan" /> : ""}
          {isOrganic ? <Icon src="organic_icon.png" alt="organic" /> : ""}
          {isInSeason ? <Icon src="in_season_icon.png" alt="In seasion" /> : ""}
        </Title>
        <Description>
          {oneLiner}
          {/* <ChevronSmall direction="down" />  //Todo: put this back in*/}
        </Description>
        {controls}
      </Product>
    </ItemContainer>
  )
}
export default BasketItem
