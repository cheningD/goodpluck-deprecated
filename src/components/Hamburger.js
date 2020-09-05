import * as React from "react"

export const Hamburger = React.memo(props => (
  <button onClick={props.onOpen} className="hamburger__wrapper">
    <span className="hamburger-line hamburger--line-top" />
    <span className="hamburger-line hamburger--line-middle" />
    <span className="hamburger-line hamburger--line-bottom" />
  </button>
))
