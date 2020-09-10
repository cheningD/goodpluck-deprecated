/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.join(__dirname, `src`, `images/icons`),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `productGroup`,
            tableLinks: [`products`, `department`],
            mapping: { mainImage: `fileNode` },
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `product`,
            tableLinks: [`productGroup`, `supplier`],
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `supplier`,
            tableLinks: [`products`],
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `department`,
            tableLinks: [`productGroup`],
          },
        ],
      },
    },
  ],
}
