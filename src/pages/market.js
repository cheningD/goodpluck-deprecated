import React, { useState } from "react"

import MarketCard from "../components/MarketCard"
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import Select from "react-select"
import { SubmitButton } from "../components/StyledComponentLib"
import styled from "styled-components"

const Page = styled.div`
  background-color: #fbe1cf;
  min-height: 100vh;
`
const Submit = styled(SubmitButton)`
  border-color: #000;
  margin: 16px auto;
  max-width: 500px;
  display: block;
`
const MobileViewOnly = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: block;
  }
`

const Market = () => {
  return (
    <Page>
      <SEO title="Market | Local Produce" />
      <Nav />
      <Submit to="/basket">Review Order for Saturday, Oct 24</Submit>
      <MobileViewOnly>
        <ShoppingMenu
          listItems={[
            "Produce",
            "Bakery",
            "Eggs",
            "Dairy",
            "Meat & Seafood",
            "Beverages",
          ]}
        />
        <ShoppingMenu
          listItems={["Fruit", "Vegetables", "Melons, Cucumbers & Squashes"]}
          size="small"
        />
      </MobileViewOnly>
      <MarketCard />
    </Page>
  )
}
export default Market

const ShoppingMenu = ({ listItems, size }) => {
  const options = listItems.map(dept => {
    return { label: `${dept}`, value: `${dept}` }
  })

  const [currentDepartment, setCurrentDepartment] = useState(listItems[0])

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      border: "none",
      borderRadius: 0,
      padding: "16px",
    }),

    control: (provided, state) => {
      const fontSize = size === "small" ? `1.25rem` : `1.5rem`
      const charWidthInPixels = size === "small" ? 11 : 14
      return {
        ...provided,
        width: `${
          state.selectProps.value.value.length * charWidthInPixels + 40
        }px`,
        border: "none",
        marginLeft: "16px",
        marginBottom: "16px",
        paddingLeft: "0",
        backgroundColor: "none",
        fontSize: `${fontSize}`,
        fontFamily: "hk_grotesksemibold, sans-serif",
      }
    },
    singleValue: (provided, state) => ({
      ...provided,
      marginLeft: "0",
      paddingLeft: "0",
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#000",
    }),
  }

  const themeFunc = theme => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: "#788474",
      primary75: "#859081",
      primary50: "#929c8f",
      primary25: "#c6ccc5",
    },
  })

  return (
    <Select
      styles={customStyles}
      options={options}
      onChange={option => setCurrentDepartment(option.value)}
      isSearchable={false}
      label="Shop"
      components={{
        IndicatorSeparator: null,
      }}
      value={{
        label: currentDepartment,
        value: currentDepartment,
      }}
      theme={themeFunc}
    />
  )
}
