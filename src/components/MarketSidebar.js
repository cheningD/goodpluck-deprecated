import React, { useState } from "react"

import { Link } from "react-scroll"
import { get } from "lodash-es"
import { sortByPathFunc } from "../util"
import styled from "styled-components"

const SidebarH1 = styled.h1`
  font-size: 1.25rem;
  font-family: hk_grotesksemibold, sans-serif;
  cursor: pointer;
  ${props => (props.selected ? `` : `color: #5c5c5c;`)}
`

const SidebarH2 = styled(Link)`
  display: block;
  padding-left: 8px;
  font-size: 1rem;
  font-family: hk_grotesklight, sans-serif;
  margin-top: 8px;
  cursor: pointer;
  ${props =>
    props.selected
      ? `
    font-family: hk_grotesksemibold, sans-serif;
    color: #000;
    text-decoration: underline;
  `
      : ``}
  ${props => (props.parentSelected ? `` : `display: none;`)}
`

const SidebarH3 = styled(Link)`
  display: block;
  font-size: 0.9rem;
  font-family: hk_groteskregular, sans-serif;
  padding-left: 16px;
  border-left: 3px solid #c3c3c3;
  color: #c3c3c3;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 8px;
  cursor: pointer;

  &:first-child {
    margin-top: 8px;
  }

  ${props =>
    props.selected
      ? `
      font-family: hk_grotesksemibold, sans-serif;
    border-left: 3px solid #788474;
  color: #6c7668;
  `
      : ``}

  ${props => (props.parentSelected ? `` : `display: none;`)}
`

const MarketSidebar = ({ productGroupNodes, setDepartment }) => {
  // Sort Nodes
  productGroupNodes
    .sort(sortByPathFunc("data.subcategory[0]"))
    .sort(sortByPathFunc("data.sortOrderCategories"))
    .sort(sortByPathFunc("data.sortOrderDepartments"))

  const isSubcategoryPresentMap = {}
  for (let node of productGroupNodes) {
    isSubcategoryPresentMap[get(node, "data.subcategory[0]")] = node
  }

  const nodes = productGroupNodes.filter(
    node => isSubcategoryPresentMap[get(node, "data.subcategory[0]")]
  )

  // FunctionsF
  const [selectedH1, _setSelectedH1] = useState(nodes[0].data.department[0])
  const [selectedH2, _setSelectedH2] = useState(nodes[0].data.category[0])
  const [selectedH3, _setSelectedH3] = useState(nodes[0].data.subcategory[0])

  const setSelectedH3 = subcategory => {
    const selectedNodeExample = nodes.filter(
      node => node.data.subcategory[0] === subcategory
    )[0]

    _setSelectedH3(selectedNodeExample.data.subcategory[0])
    _setSelectedH2(selectedNodeExample.data.category[0])
    _setSelectedH1(selectedNodeExample.data.department[0])
    setDepartment(selectedNodeExample.data.department[0])
  }

  const setSelectedH2 = category => {
    const selectedNodeExample = nodes.filter(
      node => node.data.category[0] === category
    )[0]
    _setSelectedH3(selectedNodeExample.data.subcategory[0])
    _setSelectedH2(selectedNodeExample.data.category[0])
    _setSelectedH1(selectedNodeExample.data.department[0])
    setDepartment(selectedNodeExample.data.department[0])
  }

  const setSelectedH1 = department => {
    const selectedNodeExample = nodes.filter(
      node => node.data.department[0] === department
    )[0]
    _setSelectedH3(selectedNodeExample.data.subcategory[0])
    _setSelectedH2(selectedNodeExample.data.category[0])
    _setSelectedH1(selectedNodeExample.data.department[0])
    setDepartment(selectedNodeExample.data.department[0])
  }

  const getSubCategoriesForCategory = category =>
    nodes
      .filter(node => node.data.category[0] === category)
      .map(node => node.data.subcategory[0])
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(subcategory => (
        <SidebarH3
          to={subcategory}
          containerId="MarketContainer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
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
            to={category}
            containerId="MarketContainer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
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

export default MarketSidebar
