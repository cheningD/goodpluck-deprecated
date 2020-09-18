import * as React from "react"
import { createPortal } from "react-dom"

// https://reactjs.org/docs/portals.html
export class Portal extends React.Component {
  el = document.createElement("div")

  componentDidMount() {
    this.el.setAttribute("class", "portal")
    if (this.props.style) {
      this.el.setAttribute("style", this.props.style)
    }
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}
