/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `productGroup`,
            tableLinks: [`products`, `department`],
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
