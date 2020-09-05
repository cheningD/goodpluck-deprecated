import React, { useState, useEffect } from "react"
import "./ConnectedSidebar.css"

export default function ConnectedSidebar(props) {
  const sideBarLinks =
    props.sideBarLinks !== undefined ? props.sideBarLinks : []
  const [activeLink, setActiveLink] = useState(window.location.hash)

  useEffect(() => {
    window.addEventListener(
      "hashchange",
      function () {
        setActiveLink(window.location.hash)
      },
      false
    )
  })

  function checkIfActive(item, activeLink) {
    if (!activeLink) return false
    return item.link === activeLink
      ? true
      : item.children !== undefined && item.children.length > 0 //check if the active link is any of the childrens
      ? item.children.filter(childItem => {
          return childItem.link === activeLink
        }).length > 0
      : false
  }

  return (
    <div className="sideBarMainWrap">
      {sideBarLinks &&
        sideBarLinks.map((el, index) => {
          return (
            <div key={index} className={"slideRTL sideBarItem"}>
              <a
                href={el.link}
                className={
                  "parentLink" +
                  (checkIfActive(el, activeLink) ? " active" : "")
                }
              >
                {el.title}
              </a>
              <div className="sideBarChildrenItems">
                {el.children.length > 0 &&
                  checkIfActive(el, activeLink) &&
                  el.children.map((childElement, childIndex) => {
                    return (
                      <a
                        href={childElement.link}
                        key={childIndex}
                        className={
                          "childLink" +
                          (checkIfActive(childElement, activeLink)
                            ? " active"
                            : "")
                        }
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
}
