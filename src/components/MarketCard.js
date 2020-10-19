import { Card, DetailCell2, LineBreak } from "../components/StyledComponentLib"
import React, { useState } from "react"

import BasketItem from "../components/BasketItem"
import Image from "../components/Image"
import MarketSidebar from "./MarketSidebar"
import styled from "styled-components"

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const Container = styled(Card)`
  margin: 16px;
`

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
`

const Sidebar = styled.div`
  width: 501px;
  padding-right: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Content = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

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

const FilterItem = styled.span`
  font-family: hk_groteskregular, sans-serif;
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
