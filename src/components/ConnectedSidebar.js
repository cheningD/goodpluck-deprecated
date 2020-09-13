import React from "react"
import find from "lodash-es/find"
import get from "lodash-es/get"
import debounce from "lodash-es/debounce"

import { ActiveSidebarContext } from "../templates/department"
import { removeNonLetters, listToClass } from "../util"
import "./ConnectedSidebar.css"

const ConnectedSidebar = React.memo(props => {
  const sideBarLinks = get(props, "sideBarLinks", [])
  const context = React.useContext(ActiveSidebarContext.context);

  function checkIfActive(item) {
    if (removeNonLetters(item.link) === context.activeItem) return "active"
    const childIsActive = !!find(item.children, childItem => removeNonLetters(childItem.link) === context.activeItem)
    return childIsActive ? "active" : undefined
  }

  function handleLinkClick(link) {
    context.setNavigating(true)
    context.setActiveItem(removeNonLetters(link))
    unSetNavigating()
  }

  const unSetNavigating =  React.useCallback(debounce(() => context.setNavigating(false), 450))
  
  return (
    <div className="sideBarMainWrap">
      {sideBarLinks.map((el, index) => {
          return (
            <div key={index} className={"slideRTL sideBarItem"}>
              <a
                href={el.link}
                onClick={() => handleLinkClick(el.link)}
                className={listToClass(["parentLink", checkIfActive(el)])}
              >
                {el.title}
              </a>
              <div className="sideBarChildrenItems">
                {el.children.length > 0 &&
                  !!checkIfActive(el) &&
                  el.children.map((childElement, childIndex) => {
                    return (
                      <a
                        href={childElement.link}
                        key={childIndex}
                        onClick={() => handleLinkClick(childElement.link)}
                        className={listToClass(["childLink", checkIfActive(childElement)])}
                      >
                        <div className="childLinkText slideRTL">
                          {childElement.title}
                        </div>
                      </a>
                    )
                  })}
              </div>
            </div>
          )
        })}
    </div>
  )
})

export default ConnectedSidebar
