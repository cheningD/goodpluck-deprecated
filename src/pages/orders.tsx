import { Card, Spinner } from '../components/StyledComponentLib'
import { OrderDetail, SignedInUser } from '../types'
import React, { useEffect, useRef, useState } from 'react'
import { isSignedIn, pastOrders, signedInUser } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketDates from '../components/BasketDates'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import Select from 'react-select'
import Seo from '../components/Seo'
import { centsToString } from '../util'
import { getOldOrders } from '../actions'
// import mapboxgl from 'mapbox-gl'
import styled from 'styled-components'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
  padding: 0 0 100px 0;
`

const Container = styled.div`
  padding: 16px;
  font-weight: 500;
  max-width: 500px;
  margin: 32px auto;
`

const H1 = styled.h1`
  color: var(--blackish);
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  padding: 32px 0;
  text-align: center;
`

export const VCard = styled(Card)`
  flex-direction: column;
`

const LineItem = styled.div`
  margin: 16px, 0;
`

const SelectDate = ({ setOrderDate, orderDates, selectedOrderDate }) => {
  const options = orderDates.map(date => {
    return { value: date, label: date }
  })

  return (
    <Select
      classNamePrefix="add-to-cart-select"
      options={options}
      onChange={option => setOrderDate(option.value)}
      isSearchable={false}
      components={{
        IndicatorSeparator: null,
      }}
      value={{
        label: `Week beginning: ${selectedOrderDate}`,
        value: selectedOrderDate,
      }}
    />
  )
}

// mapboxgl.accessToken =''
const OrdersPage = () => {
  const mapContainerRef = useRef(null)
  const user: SignedInUser = useRecoilValue(signedInUser)
  const [oldOrders, setOldOrders] = useRecoilState(pastOrders)
  const [orderDate, setOrderDate] = useState(null)

  const fetchOldOrders = async () => {
    // GET ORDERS
    const orderData: Record<string, OrderDetail> = await getOldOrders()
    if (orderData) {
      setOrderDate(
        Object.keys(orderData)
          .slice()
          .sort((a, b) => (b > a ? 1 : -1))[0],
      )
      setOldOrders(orderData)
    }
  }

  useEffect(() => {
    if (oldOrders === null) {
      fetchOldOrders()
    }
  }, [])

  // initialize map when component mounts
  // useEffect(() => {
  //   if (user && user.addressLat && user.addressLong) {
  //     const map = new mapboxgl.Map({
  //       container: mapContainerRef.current,
  //       // See style options here: https://docs.mapbox.com/api/maps/#styles
  //       style: 'mapbox://styles/mapbox/light-v10',
  //       center: [-104.9876, 39.7405],
  //       zoom: 12.5,
  //     })

  //     // clean up on unmount
  //     return () => map.remove()
  //   }
  // }, [user])

  let content
  let hasOrders = false
  if (oldOrders && Object.keys(oldOrders).length) {
    hasOrders = true
  }
  if (!useRecoilValue(isSignedIn)) {
    content = (
      <H1>
        Please <Link to="/signin">sign in</Link> to see your orders
      </H1>
    )
  } else if (!hasOrders) {
    content = <Spinner />
  } else {
    const order: OrderDetail = oldOrders[orderDate]
    const basketDates = (
      <BasketDates
        scheduledStatus={order.scheduledStatus}
        editStatus={order.editStatus}
        chargedStatus={order.chargedStatus}
        deliveredStatus={order.deliveredStatus}
        editBasketStartDate={order.editBasketStartDate}
        editBasketEndDate={order.editBasketEndDate}
        chargedDate={order.chargedDate}
        deliveryDate={order.deliveryDate}
      />
    )

    let basketItems = []
    if (order.basket) {
      basketItems = order.basket.map(([key, data]) => {
        return (
          <LineItem>{`${data.unitQuantity || ''}  ${data.unitLabel || ''}  ${data.name || 'item'}  @${centsToString(
            data.unitPriceInCents,
          )} (x${data.quantity || ''})`}</LineItem>
        )
      })
    }
    content = (
      <>
        <h1>View past orders:</h1>
        <SelectDate orderDates={Object.keys(oldOrders)} setOrderDate={setOrderDate} selectedOrderDate={orderDate} />
        <h2>Order for week of {order.mondayOfOrderDateString} </h2>
        <div className="map-container" ref={mapContainerRef} />
        <h3>Deliver to:</h3>
        <div>
          {user.first || ''} {user.last || ''}
        </div>
        <div>{user.addressLine1 || ''}</div>
        <div>{user.addressLine2 || ''}</div>
        <div>MI {user.zip || ''}</div>
        {basketDates}

        {basketItems ? <VCard>{basketItems}</VCard> : ''}
        <div>Tax: {centsToString(0)}</div>
        <div>Total Charged: {centsToString(order.amountReceivedInCents || 0)}</div>
      </>
    )
  }

  return (
    <Page>
      <Helmet>
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
      </Helmet>
      <Seo title="My Basket" />
      <Nav />

      <Container>{content}</Container>
    </Page>
  )
}
export default OrdersPage
