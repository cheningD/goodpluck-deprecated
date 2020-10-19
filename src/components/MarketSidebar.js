import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import get from "lodash-es/get"
import memoizeOne from "memoize-one"
import styled from "styled-components"

const sortByPathFunc = path => {
  return (a, b) => get(a, path, 0) - get(b, path, 0)
}

const SidebarH1 = styled.h1`
  font-size: 1.25rem;
  font-family: hk_grotesksemibold, sans-serif;
`

const SidebarH2 = styled.h2`
  font-size: 1rem;
  font-family: hk_grotesksemibold, sans-serif;
  margin-bottom: px;
  ${props =>
    props.selected
      ? `
    font-family: hk_groteskbold, sans-serif;
    color: #6c7668;
  `
      : ``}
  ${props => (props.parentSelected ? `` : `display: none;`)}
`

const SidebarH3 = styled.h3`
  font-size: 1rem;
  font-family: hk_groteskregular, sans-serif;
  padding-left: 16px;
  border-left: 3px solid #c3c3c3;
  color: #c3c3c3;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 8px;

  &:first-child {
    margin-top: 8px;
  }

  ${props =>
    props.selected
      ? `
      font-family: hk_grotesksemibold, sans-serif;
    border-left: 3px solid #6c7668;
  color: #6c7668;
  `
      : ``}

  ${props => (props.parentSelected ? `` : `display: none;`)}
`

const SidebarContent = ({ nodes }) => {
  // Sort Nodes
  nodes
    .sort(sortByPathFunc("data.sortOrderCategories"))
    .sort(sortByPathFunc("data.sortOrderDepartments"))

  // Functions
  const [selectedH1, _setSelectedH1] = useState(nodes[0].data.department[0])
  const [selectedH2, _setSelectedH2] = useState(nodes[0].data.category[0])
  const [selectedH3, _setSelectedH3] = useState(nodes[0].data.name)

  const setSelectedH3 = subcategory => {
    const selectedNodeExample = nodes.filter(
      node => node.data.name === subcategory
    )[0]

    _setSelectedH3(selectedNodeExample.data.name)
    _setSelectedH2(selectedNodeExample.data.category[0])
    _setSelectedH1(selectedNodeExample.data.department[0])
  }

  const setSelectedH2 = category => {
    const selectedNodeExample = nodes.filter(
      node => node.data.category[0] === category
    )[0]
    _setSelectedH3(selectedNodeExample.data.name)
    _setSelectedH2(selectedNodeExample.data.category[0])
    _setSelectedH1(selectedNodeExample.data.department[0])
  }

  const setSelectedH1 = department => {
    const selectedNodeExample = nodes.filter(
      node => node.data.department[0] === department
    )[0]
    _setSelectedH3(selectedNodeExample.data.name)
    _setSelectedH2(selectedNodeExample.data.category[0])
    _setSelectedH1(selectedNodeExample.data.department[0])
  }

  const getSubCategoriesForCategory = category =>
    nodes
      .filter(node => node.data.category[0] === category)
      .map(node => node.data.name)
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(subcategory => (
        <SidebarH3
          selected={selectedH3 === subcategory}
          parentSelected={selectedH2 === category}
          onClick={() => setSelectedH3(subcategory)}
        >
          {subcategory}
        </SidebarH3>
      ))

  const getCategoriesForDepartment = department =>
    nodes
      .filter(node => node.data.department[0] === department)
      .map(node => node.data.category[0])
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(category => (
        <>
          <SidebarH2
            selected={selectedH2 === category}
            parentSelected={selectedH1 === department}
            onClick={() => setSelectedH2(category)}
          >
            {category}
          </SidebarH2>
          {getSubCategoriesForCategory(category)}
        </>
      ))

  const uniqueHeaders = nodes
    .map(node => node.data.department[0])
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(department => (
      <>
        <SidebarH1
          selected={selectedH1 === department}
          onClick={() => setSelectedH1(department)}
        >
          {department}
        </SidebarH1>
        {getCategoriesForDepartment(department)}
      </>
    ))

  return <>{uniqueHeaders}</>
}

const MarketSidebar = () => {
  const data = useStaticQuery(graphql`
    {
      subCategories: allAirtable(filter: { table: { eq: "subCategory" } }) {
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
    }
  `)
  return <SidebarContent nodes={data.subCategories.nodes} />
}

export default MarketSidebar
