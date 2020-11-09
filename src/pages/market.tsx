import { MobileViewOnly, Spinner } from '../components/StyledComponentLib'
import React, { useEffect, useState } from 'react'
import { isSignedIn, signedInUser } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import { Link } from 'gatsby'
import MarketCard from '../components/MarketCard'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import Select from 'react-select'
import { SignedInData } from '../types'
import { getSignedInData } from '../actions'
import styled from 'styled-components'

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
  const [user, setUser] = useRecoilState(signedInUser)
  const [fetchComplete, setFetchComplete] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const signedInData: SignedInData = await getSignedInData()
      setFetchComplete(true)
      if (signedInData && signedInData.signedInUser) {
        setUser(signedInData.signedInUser)
      }
    }

    if (!user) {
      fetchData()
    }
  }, [])

  let content = <Spinner />

  if (fetchComplete) {
    content = (
      <H1>
        Please <Link to="/signin">sign in</Link> to start shopping
      </H1>
    )
  }

  if (useRecoilValue(isSignedIn)) {
    content = (
      <>
        <MobileViewOnly>
          <ShoppingMenu
            listItems={['Produce', 'Bakery', 'Eggs', 'Dairy', 'Meat & Seafood', 'Beverages']}
            size="large"
          />
          <ShoppingMenu listItems={['Fruit', 'Vegetables', 'Melons, Cucumbers & Squashes']} size="small" />
        </MobileViewOnly>
        <MarketCard />
      </>
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
