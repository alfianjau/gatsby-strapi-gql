import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import SEO from "../components/seo"
import Layout from "../components/layout"
import RestaurantList from "../components/RestaurantList"
import { Col, Row, Input } from "antd"

const { Search } = Input

const GET_RESTAURANTS = gql`
  query GET_RESTAURANTS($name: String!) {
    restaurantByName(where: { name: $name }) {
      name
    }
  }
`

const RestaurantSearch = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { loading, error, data } = useQuery(GET_RESTAURANTS, {
    variables: { name: `${searchTerm}` },
  })
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  return (
    <Layout>
      <SEO title="Home" />
      <Row style={{ paddingBottom: "50px" }}>
        <Col span={12} offset={5}>
          <Search
            placeholder="Input your search"
            onSearch={term => setSearchTerm(term)}
            enterButton
            className="search-bar"
          />
        </Col>
      </Row>
      <RestaurantList results={data} />
    </Layout>
  )
}

export default RestaurantSearch
