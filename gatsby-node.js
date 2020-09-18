const path = require("path")
const slash = require("slash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiRestaurant {
        edges {
          node {
            id
            name
            strapiId
            categories {
              name
              id
              restaurants
              createdAt
              created_by
            }
            description
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allStrapiRestaurant } = result.data

  const restaurantTemplate = path.resolve("./src/templates/restaurant.js")

  allStrapiRestaurant.edges.forEach(edge => {
    createPage({
      path: edge.node.name,
      component: slash(restaurantTemplate),
      context: {
        ...edge.node,
      },
    })
  })
}
