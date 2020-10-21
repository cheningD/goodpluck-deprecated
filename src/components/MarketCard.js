import { Card, DetailCell2, LineBreak } from "../components/StyledComponentLib"
import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import BasketItem from "../components/BasketItem"
import Image from "../components/Image"
import MarketSidebar from "./MarketSidebar"
import { formatCurrencyString } from "use-shopping-cart"
import get from "lodash-es/get"
import styled from "styled-components"

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const Container = styled(Card)`
  margin: 16px auto;
  max-width: 1000px;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
`

const Sidebar = styled.div`
  width: 300px;
  padding-right: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Content = styled.div`
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ProductList = props => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "productGroup" } }) {
        nodes {
          data {
            mainImage {
              id
            }
            name
            department
            category
            subCategory
            productv2 {
              data {
                available
                name
                priceInCents
                stripePriceId
                unitQuantity
                unitLabel
              }
            }
            description
          }
        }
      }
    }
  `)
  const products = data.allAirtable.nodes.map(productGroup => {
    const productData = get(productGroup, "data.productv2[0].data", {})

    // Check product is available
    if (!productData.available) {
      return ""
    }

    const quantityLabel = `${productData.unitQuantity || 1} ${
      productData.unitLabel || ""
    }`

    const priceLabel = formatCurrencyString({
      value: productData.priceInCents,
      currency: "usd",
    })

    console.log("productGroup", productGroup)

    return (
      <>
        <BasketItem
          quantityLabel={quantityLabel}
          name={get(productGroup, "data.name", "")}
          oneLiner={get(productGroup, "data.oneLiner", "")}
          description={get(productGroup, "data.description", "")}
          priceLabel={priceLabel}
          canEdit={true}
          stripePriceId={productData.stripePriceId}
        />
        <ThinLineBreak />
      </>
    )
  })
  return <>{products}</>
}

const MarketCard = ({ deliveryDate, orderFrequency }) => {
  const [filters, setFilters] = useState({
    Local: false,
    Organic: false,
    "In season": false,
  })
  return (
    <Container>
      <DetailCell2>Filter by:</DetailCell2>
      <DetailCell2 right>
        <FilterGroup options={filters} updateOptions={setFilters} />
      </DetailCell2>
      <LineBreak />
      <Columns>
        <Sidebar>
          <MarketSidebar />
        </Sidebar>
        <Content>
          <ProductList />
        </Content>
      </Columns>
    </Container>
  )
}

export default MarketCard

const FilterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const FilterItem = styled.button`
  color: #5c5c5c;
  outline: none;
  font-family: hk_grotesksemibold, sans-serif;
  padding: 0 16px;
`

const Checkmark = styled(Image)`
width: 16px;
height 16px;
display: inline-block;
margin-right: 8px;

  ${props =>
    props.checked
      ? `filter: invert(26%) sepia(71%) saturate(6327%) hue-rotate(115deg) brightness(104%) contrast(104%);`
      : `filter: invert(90%) sepia(17%) saturate(0%) hue-rotate(168deg) brightness(96%) contrast(85%);`}
`

const FilterGroup = ({ options, updateOptions }) => {
  const filterItems = Object.keys(options).map(label => {
    const toggleValue = {}
    toggleValue[label] = !options[label]
    return (
      <FilterItem
        onClick={() => updateOptions(Object.assign({}, options, toggleValue))}
      >
        <Checkmark src="checkmark.png" alt="Check" checked={options[label]} />
        <span>{label}</span>
      </FilterItem>
    )
  })

  return <FilterContainer>{filterItems}</FilterContainer>
}
