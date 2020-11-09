import * as React from 'react'

import styled from 'styled-components'

const HamburgerBtn = styled.button`
  width: 55px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  &:hover {
    background: none;
  }

  &:focus {
    background: none;
    outline: none;
  }

  .hamburger-line {
    height: 3px;
    width: 25px;
    background: ${props => props.color || '#fff'};
    transition: 250ms;
  }

  .hamburger--line-middle {
    width: 25px;
  }

  .hamburger--line-bottom {
    width: 15px;
  }

  ${props =>
    props.open
      ? `
  .hamburger--line-middle {
    display: none;
    visibility: hidden;
  }

  .hamburger--line-top {
    transform: rotate(45deg);
    position: absolute;
    bottom: 15px;
  }

  .hamburger--line-bottom {
    width: 25px;
    position: absolute;
    transform: rotate(-45deg);
    bottom: 15px;
  }
  height: 32px;
  `
      : ``}
`

export const Hamburger = React.memo(props => (
  <HamburgerBtn aria-label="toggle menu" onClick={props.onClick} open={props.isOpen}>
    <span className="hamburger-line hamburger--line-top" />
    <span className="hamburger-line hamburger--line-middle" />
    <span className="hamburger-line hamburger--line-bottom" />
  </HamburgerBtn>
))
