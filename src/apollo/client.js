import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

// try to hit local strapi graphql endpoint
export const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  fetch,
})
