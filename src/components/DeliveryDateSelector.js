import React, { useEffect, useState } from "react"
import Select, { components } from "react-select"
import { graphql, useStaticQuery } from "gatsby"

import Emoji from "./Emoji"

const SingleValue = props => (
  <components.SingleValue {...props}>
    <Emoji symbol="🍇" label="Arrives on icon" />
    Shopping for {props.data.chipLabel}
  </components.SingleValue>
)

const DeliveryDateSelector = () => {
  const data = useStaticQuery(graphql`
    {
      airtable(
        data: { theme: { eq: "default1" } }
        table: { eq: "site_defaults" }
      ) {
        data {
          nextNextSaturdayDeliveryDate
          nextSaturdayDeliveryDate
        }
      }
    }
  `)

  const options = [
    {
      label: `Shopping for this ${data.airtable.data.nextSaturdayDeliveryDate}`,
      chipLabel: data.airtable.data.nextSaturdayDeliveryDate,
      value: data.airtable.data.nextSaturdayDeliveryDate,
    },
    {
      label: `Shopping for ${data.airtable.data.nextNextSaturdayDeliveryDate}`,
      chipLabel: data.airtable.data.nextNextSaturdayDeliveryDate,
      value: data.airtable.data.nextNextSaturdayDeliveryDate,
    },
  ]

  let goodpluck_delivery_date_from_localStorage
  //Check localStorage is defined for SSR
  if (typeof localStorage !== `undefined`) {
    goodpluck_delivery_date_from_localStorage = localStorage.getItem(
      "goodpluck_delivery_date"
    )
  }

  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState(
    goodpluck_delivery_date_from_localStorage ||
      data.airtable.data.nextSaturdayDeliveryDate
  )

  //Update localstorage whenever
  useEffect(
    () => localStorage.setItem("goodpluck_delivery_date", selectedDeliveryDate),
    [selectedDeliveryDate]
  )

  const customStyles = {
    control: (provided, _) => ({
      ...provided,
      backgroundColor: "#788474",
      border: "none",
      margin: "1rem auto 1rem auto",
      width: "16rem",
      fontSize: "0.9rem",
    }),
    singleValue: provided => ({
      ...provided,
      color: "white",
    }),

    option: (provided, state) => {
      const res = {
        ...provided,
        color: "#404040",
      }
      if (state.isSelected) {
        res["background-color"] = "#f7c59f"
      }
      return res
    },
  }

  if (typeof window === `undefined`) {
    return null
  }

  return (
    <Select
      className="delivery-date-selector"
      styles={customStyles}
      options={options}
      onChange={option => setSelectedDeliveryDate(option.value)}
      isSearchable={false}
      label="Shopping for"
      components={{
        IndicatorSeparator: null,
        SingleValue: SingleValue,
      }}
      value={{
        label: `Shopping for ${selectedDeliveryDate}`,
        chipLabel: selectedDeliveryDate,
        value: selectedDeliveryDate,
      }}
    />
  )
}

export default DeliveryDateSelector
