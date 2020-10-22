import { Card, DetailCell2, LineBreak } from "../components/StyledComponentLib"
import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Image from "../components/Image"
import MarketProductList from "../components/MarketProductList"
import MarketSidebar from "./MarketSidebar"
import get from "lodash-es/get"
import styled from "styled-components"

const Container = styled(Card)`
  margin: 16px auto;
  max-width: 900px;
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
  min-height: 500px;
  height: calc(100vh - 200px);
  overflow: scroll;
`

const MarketCard = ({ deliveryDate, orderFrequency }) => {
  const [filters, setFilters] = useState({
    Local: false,
    Organic: false,
    "In season": false,
  })
  const [department, setDepartment] = useState("Produce")
  const data = useStaticQuery(graphql`
    {
      subcategories: allAirtable(filter: { table: { eq: "subCategory" } }) {
        nodes {
          data {
            name
            category
            department
            sortOrderCategories
            sortOrderDepartments
          }
        }
      }
      productGroups: allAirtable(filter: { table: { eq: "productGroup" } }) {
        nodes {
          data {
            mainImage {
              id
            }
            name
            department
            description
            category
            subcategory
            sortOrderCategories
            sortOrderDepartments
            productv2 {
              data {
                available
                name
                priceInCents
                stripePriceId
                unitQuantity
                unitLabel
                isOrganic
                isLocal
                isInSeason
              }
            }
          }
        }
      }
    }
  `)

  // Remove unavailable products
  let productGroupNodes = data.productGroups.nodes.filter(node =>
    get(node, "data.productv2[0].data.available", false)
  )

  return (
    <Container>
      <DetailCell2>Filter by:</DetailCell2>
      <DetailCell2 right>
        <FilterGroup options={filters} updateOptions={setFilters} />
      </DetailCell2>
      <LineBreak />
      <Columns>
        <Sidebar>
          <MarketSidebar
            productGroupNodes={productGroupNodes}
            setDepartment={setDepartment}
          />
        </Sidebar>
        <Content id="MarketContainer">
          <MarketProductList
            department={department}
            subcategoryNodes={data.subcategories.nodes}
            productGroupNodes={productGroupNodes}
            filters={filters}
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

const FilterItem = styled.button`
  color: #5c5c5c;
  outline: none;
  font-family: hk_grotesksemibold, sans-serif;
  padding: 0 24px;
  &:focus {
    color: #000;
  }
  ${props => (props.checked ? `color: #000;` : "")}
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
    let imgSrc = "checkmark.png"
    const imgAlt = `Toggle ${label}`

    if (label === "Organic") {
      imgSrc = "organic_icon_black.png"
    } else if (label === "In season") {
      imgSrc = "in_season_icon_black.png"
    } else if (label === "Local") {
      imgSrc = "mitten.png"
    }

    console.log("imgSrc ------------------>", imgSrc)

    const toggleValue = {}
    toggleValue[label] = !options[label]
    return (
      <FilterItem
        checked={options[label]}
        onClick={() => updateOptions(Object.assign({}, options, toggleValue))}
      >
        <Checkmark src={imgSrc} alt={imgAlt} checked={options[label]} />
        <span>{label}</span>
      </FilterItem>
    )
  })

  return <FilterContainer>{filterItems}</FilterContainer>
}
