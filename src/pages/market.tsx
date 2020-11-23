import React, { useState } from 'react'
import { isSignedIn, myOrders } from '../store'

import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import CountDown from '../components/Countdown'
import { DateTime } from 'luxon'
import MarketCard from '../components/MarketCard'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
import SEO from '../components/SEO'
import Select from 'react-select'
import { Spinner } from '../components/StyledComponentLib'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
  padding-bottom: 32px;
`

const Market = () => {
  let content
  const orders = useRecoilValue(myOrders)
  const [countdown, setCountdown] = useState('')
  let upcomingOrderData: OrderDetail | null = null
  if (orders && Object.keys(orders).length > 0) {
    upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
  }

  if (!useRecoilValue(isSignedIn)) {
    content = <Spinner />
  } else if (
    upcomingOrderData &&
    DateTime.local() < DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
  ) {
    const startTime = DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
    content = <CountDown startTime={startTime} />
  } else {
    content = <MarketCard />
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
