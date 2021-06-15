import { ErrorMessage, Field, Form } from 'formik'
import styled, { keyframes } from 'styled-components'

import { Link } from 'gatsby'

export const MobileViewOnly = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: block;
  }
`

export const TabletAndMobileViewOnly = styled.div`
  display: none;
  @media screen and (max-width: 786px) {
    display: block;
  }
`

export const DesktopViewOnly = styled.div`
  display: none;
  @media screen and (max-width: 786px) {
    display: block;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

interface ColumnProps {
  flex?: string
  alignItems?: string
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  justify-content: center;
  ${props => (props.flex ? `flex: ${props.flex};` : 'flex: 1;')}
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
`

export const PrimaryButton = styled.button`
  background-color: var(--peach-bg);
  border-radius: 4px;
  border: 2px solid var(--blackish);
  color: var(--blackish);
  display: flex;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 1rem;
  justify-content: center;
  padding: 8px 0px;
  margin: 16px 0;
  width: 100%;

  &:hover,
  :focus {
    background-color: var(--green-bg-light);
    color: var(--blackish);
  }

  &:focus {
    outline: 1px solid blue;
    outline-offset: 0px;
  }

  &:active {
    transform: scale(0.99);
    outline: 0px none white;
  }
`

export const LightButton = styled(PrimaryButton)`
  background-color: #fff;
`
interface SecondaryButtonProps {
  inline?: boolean
}

export const SecondaryButton = styled(PrimaryButton)<SecondaryButtonProps>`
  background: none;
  text-decoration: underline;
  border-style: none;

  ${props =>
    props.inline
      ? `
         width: fit-content;
         display: inline-block;
         padding: 0 0 0 16px;
         margin: 0 0;
         `
      : ``}

  &:focus,
  :hover {
    color: var(--green-bg-dark);
    background: none;
  }
`
export const DangerButton = styled(PrimaryButton)`
  border-color: #e34843;
`

export const ButtonSmall = styled(Link)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 60px;
  margin-bottom: 32px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 4px;
  border: 2px solid #fff;
  background-color: #525b52;
  color: #fff;
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (max-width: 479px) {
    -webkit-align-self: stretch;
    -ms-flex-item-align: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  &:hover {
    background-color: #df928e;
  }
`

export const SubmitButton = styled(ButtonSmall)`
  font-family: Bebas Neue, sans-serif;
  background-color: #f7c59f;
  border-radius: 4;
  border: 2px solid #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;

  &:hover,
  :focus {
    color: #000;
  }

  :disabled {
    background-color: #ccc;
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
  }
`

export const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  padding: 16px;
  width: 100%;
`

export const Header = styled.div`
  color: #fff;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 24px;

  @media screen and (max-width: 479px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export const Header2 = styled.div`
  color: #fff;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin: 32px 0 16px 0;

  @media screen and (max-width: 479px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`

export const H1 = styled.h1`
  color: var(--blackish);
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
`

export const H2 = styled.h2`
  color: var(--blackish);
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 1.5rem;
  margin: 16px 0 8px 0;
`

export const Bold = styled.span`
  font-family: hk_grotesksemibold, sans-serif;
`

export const StyledField = styled(Field)`
  border-radius: 4px;
  border: none;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  color: #3f3a40;
  font-size: 1.125rem;
`

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #fff;
  font-size: 1rem;
  width: 100%;
`

export const StyledForm = styled(Form)`
  input {
    font-family: Bebas Neue, sans-serif;
  }
  width: 500px;
  padding-top: 64px;
  margin: 0 auto;

  @media screen and (max-width: 479px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const CardElementStyle = {
  base: {
    iconColor: '#788474',
    color: '#333',
    fontWeight: '500',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    fontSmoothing: 'antialiased',

    ':-webkit-autofill': {
      color: '#fce883',
    },
    '::placeholder': {
      color: '#333',
    },
  },
  invalid: {
    iconColor: '#CE5852',
    color: '#CE5852',
  },
}

export const LineBreak = styled.div`
  width: 100%;
  height: 2px;
  background-color: #eaeaea;
  margin: 8px auto 16px auto;
`

interface DetailCellProps {
  bold?: boolean
  right?: boolean
}

export const DetailCell = styled.div<DetailCellProps>`
  font-family: 'hk_groteskregular', sans-serif;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 2;
  width: 100%;
  padding: 0.1em 0rem;
  overflow: hidden;
  list-style: none;

  ${props => (props.bold ? 'font-family: hk_grotesksemibold, sans-serif;' : '')}

  ${props => (props.right ? 'text-align: right;' : '')}
`

export const DetailCell2 = styled(DetailCell)`
  width: 50%;
`

export const TermsLink = styled.a`
  color: #fffd82;
  text-decoration: underline;
`

export const FieldWrapper = styled.div`
  margin: 36px 0;
  width: 100%;
`
export const FinePrint = styled.div`
  text-align: justify;
  font-size: 0.9rem;
  color: #eaeaea;
  line-height: 1rem;
  margin-bottom: 32px;

  div {
    margin: 8px 0;
  }

  span {
    margin: 4px 0;
  }
`
const ldsDualRing = keyframes`
0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  position: relative;
  top: -4px;
  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid ${props => props.color || '#fff'};
    border-color: ${props => props.color || '#fff'} transparent ${props => props.color || '#fff'} transparent;
    animation: ${ldsDualRing} 1.2s linear infinite;
  }
`
export const Error = styled.div`
  width: 100%;

  margin: 16px auto;
  border-radius: 4px;
  background: #fff;
  padding: 8px 16px;
  // border: 2px solid #eaeaea;
  border-left: 8px solid #e34843;
  color: #5c5c5c;
`

interface CheckboxLabelProps {
  isChecked: boolean
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  .checkbox {
    display: none;
  }
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #fff;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    position: absolute;
    left: 0;
    top: 3px;
    opacity: 0.6;
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;
  }

  ${({ isChecked }) => {
    if (isChecked) {
      return `

    &:before {
    width: 10px;
    top: 0;
    left: 5px;
    border-radius: 0;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
      
    `
    }
  }}
`
