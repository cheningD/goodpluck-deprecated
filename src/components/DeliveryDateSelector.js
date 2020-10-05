import React, { useState, useEffect } from "react"
import Select, { components } from "react-select"

import { useStaticQuery, graphql } from "gatsby"

const SingleValue = props => (
  <components.SingleValue {...props}>
    {props.data.chipLabel}
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
      chipLabel: `Shopping for ${data.airtable.data.nextNextSaturdayDeliveryDate}`,
      label: data.airtable.data.nextNextSaturdayDeliveryDate,
      value: data.airtable.data.nextNextSaturdayDeliveryDate,
    },
    {
      chipLabel: `Shopping for ${
        data.airtable.data.nextSaturdayDeliveryDate.split(",")[0]
      }`,
      label: data.airtable.data.nextSaturdayDeliveryDate,
      value: data.airtable.data.nextSaturdayDeliveryDate,
    },
  ]

  const [selectedDeliveryDate, setSelectedDeliveryDate] = useState(
    localStorage.getItem("goodpluck_delivery_date") ||
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
      "background-color": "#788474",
      border: "none",
      margin: "1rem 0 1rem 0",
      width: "15rem",
      "font-size": "0.9rem",
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

  return (
    <Select
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
        chipLabel: `Shopping for ${selectedDeliveryDate}`,
        label: selectedDeliveryDate,
        value: selectedDeliveryDate,
      }}
    />
  )
}

export default DeliveryDateSelector
