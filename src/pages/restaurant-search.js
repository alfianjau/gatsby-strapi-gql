import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const GET_RESTAURANTS = gql`
  {
    restaurants {
      name
      description
    }
  }
`

const RestaurantSearch = () => {
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>
}

export default RestaurantSearch
