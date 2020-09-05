const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const productTemplate = path.resolve(`src/templates/product.js`)
  await graphql(
    `
      query MyQuery {
        allAirtable(filter: { table: { eq: "productGroup" } }) {
          nodes {
            data {
              slug
              id
            }
          }
        }
      }
    `,
    { limit: 100000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allAirtable.nodes.forEach(node => {
      createPage({
        // Path for this page — required
        path: `${node.data.slug}`,
        component: productTemplate,
        context: {
          id: node.data.id,
        },
      })
    })
  })

  const departmentTemplate = path.resolve(`src/templates/department.js`)
  await graphql(
    `
      query MyQuery {
        allAirtable(filter: { table: { eq: "department" } }) {
          nodes {
            data {
              id
              slug
            }
          }
        }
      }
    `,
    { limit: 100000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allAirtable.nodes.forEach(node => {
      createPage({
        // Path for this page — required
        path: `${node.data.slug}`,
        component: departmentTemplate,
        context: {
          id: node.data.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}
