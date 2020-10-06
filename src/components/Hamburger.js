import "./Hamburger.css"

import * as React from "react"

import { listToClass } from "../util"

export const Hamburger = React.memo(props => (
  <button
    aria-label="toggle menu"
    onClick={props.onOpen}
    className={listToClass(["hamburger", props.isOpen && "hamburger__open"])}
  >
    <span className="hamburger-line hamburger--line-top" />
    <span className="hamburger-line hamburger--line-middle" />
    <span className="hamburger-line hamburger--line-bottom" />
  </button>
))
