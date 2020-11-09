import React, { useState } from 'react'

import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import { Link } from 'gatsby'
import MarketCard from '../components/MarketCard'
import { MobileViewOnly } from '../components/StyledComponentLib'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Select from 'react-select'
import { isSignedIn } from '../store'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
  padding-bottom: 32px;
`
const H1 = styled.h1`
  color: var(—blackish);
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  text-align: center;
  padding: 32px 0;
`

const Market = () => {
  let content = (
    <>
      <MobileViewOnly>
        <ShoppingMenu listItems={['Produce', 'Bakery', 'Eggs', 'Dairy', 'Meat & Seafood', 'Beverages']} />
        <ShoppingMenu listItems={['Fruit', 'Vegetables', 'Melons, Cucumbers & Squashes']} size="small" />
      </MobileViewOnly>
      <MarketCard />
    </>
  )

  if (!useRecoilValue(isSignedIn)) {
    content = (
      <H1>
        Please <Link to="/signin">sign in</Link> to start shopping
      </H1>
    )
  }

  return (
    <Page>
      <SEO title="Market | Local Produce" />
      <Nav />
      <BasketAccountShopLinks />
      {content}
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
      border: 'none',
      borderRadius: 0,
      padding: '16px',
    }),

    control: (provided, state) => {
      const fontSize = size === 'small' ? `1.25rem` : `1.5rem`
      const charWidthInPixels = size === 'small' ? 11 : 14
      return {
        ...provided,
        width: `${state.selectProps.value.value.length * charWidthInPixels + 40}px`,
        border: 'none',
        marginLeft: '16px',
        marginBottom: '16px',
        paddingLeft: '0',
        backgroundColor: 'none',
        fontSize: `${fontSize}`,
        fontFamily: 'hk_grotesksemibold, sans-serif',
      }
    },
    singleValue: (provided, state) => ({
      ...provided,
      marginLeft: '0',
      paddingLeft: '0',
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#000',
    }),
  }

  const themeFunc = theme => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: '#788474',
      primary75: '#859081',
      primary50: '#929c8f',
      primary25: '#c6ccc5',
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
