import * as React from "react"

import styled from "styled-components"

const Icon = styled.span`
  font-family: "fa solid";
  padding-left: 4px;
`

const Chevron = ({ direction, ...rest }) => {
  if (direction === "up") {
    return <Icon {...rest}></Icon>
  }
  if (direction === "down") {
    return <Icon {...rest}></Icon>
  }
  if (direction === "left") {
    return <Icon {...rest}></Icon>
  }
  if (direction === "right") {
    return <Icon {...rest}></Icon>
  }
}

export default Chevron
