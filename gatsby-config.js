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
  siteMetadata: {
    title: "Goodpluck: Local Farm Groceries Delivered | Detroit",
    titleTemplate: "%s",
    description:
      "Goodpluck delivers groceries direct from local farms every saturday",
    siteUrl: "https://www.goodpluck.com", // No trailing slash allowed!
    image: "/static/shareimage.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@goodpluckgrows",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GoodPluck",
        short_name: "GoodPluck",
        start_url: "/",
        background_color: "#788474",
        theme_color: "#788474",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.join(__dirname, `src`, `images/icons`),
        },
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
            tableName: `site_defaults`,
            mapping: {
              placeholderImage: `fileNode`,
            },
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `productGroup`,
            tableLinks: [`productv2`, `department_table`],
            mapping: { mainImage: `fileNode`, image2: `fileNode` },
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `productv2`,
            tableLinks: [`productGroup`, `supplier`],
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `supplier`,
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `department_table`,
            tableLinks: [`productGroup`],
          },
        ],
      },
    },
  ],
}
