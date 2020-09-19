import * as React from "react"
import { createPortal } from "react-dom"
import {listToClass} from "../util";

// https://reactjs.org/docs/portals.html
export class Portal extends React.Component {
  el = document.createElement("div")

  componentDidMount() {
    this.el.setAttribute("class", listToClass(["portal", this.props.className]))
    if (this.props.style) {
      this.el.setAttribute("style", this.props.style)
    }
    document.body.appendChild(this.el)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.style !== this.props.style) {
      this.el.setAttribute("style", this.props.style)
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}
