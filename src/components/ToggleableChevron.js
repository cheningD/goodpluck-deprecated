import * as React from "react"
import { listToClass } from "../util"

export const ToggleableChevron = props => (
  <span
    style={{
      ...(props.style || {}),
      transform: !props.isUpArrow ? "rotate(180deg)" : undefined,
    }}
    className={listToClass(["fas fa-solid", props.classNames])}
  >
    
  </span>
)
