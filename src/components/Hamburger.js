import * as React from "react"
import "./Hamburger.css"
import { listToClass } from "../util"

export const Hamburger = React.memo(props => (
  <button onClick={props.onOpen} className={listToClass(["hamburger", props.isOpen && "hamburger__open"])}>
    <span className="hamburger-line hamburger--line-top" />
    <span className="hamburger-line hamburger--line-middle" />
    <span className="hamburger-line hamburger--line-bottom" />
  </button>
))
