import * as React from "react"
import { listToClass } from "../util"

export const ToggleableChevron = props => {
  if (props.isUpArrow)
    return (
      <span
        style={props.style}
        className={listToClass(["fas fa-solid", props.classNames])}
      >
        
      </span>
    )
  return (
    <span
      style={{
        ...(props.style || {}),
        transform: "rotate(180deg)",
      }}
      className={listToClass(["fas fa-solid", props.classNames])}
    >
      
    </span>
  )
}
