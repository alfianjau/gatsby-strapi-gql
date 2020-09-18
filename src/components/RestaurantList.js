import React from "react"

const RestaurantList = props => (
  <div>
    <pre>{JSON.stringify(props, undefined, 2)}</pre>
  </div>
)

export default RestaurantList
