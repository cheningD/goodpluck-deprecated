import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const Banner = () => {
  const data = useStaticQuery(graphql`
    {
      airtable(
        data: { theme: { eq: "default1" } }
        table: { eq: "site_defaults" }
      ) {
        data {
          bannerText
        }
      }
    }
  `)
  let banner = ""
  if (data.airtable.data.bannerText) {
    banner = (
      <div
        style={{
          color: "white",
          background: "#031927",
          padding: "1rem 2rem",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        {data.airtable.data.bannerText}
      </div>
    )
  }
  return <>{banner}</>
}

export default Banner
