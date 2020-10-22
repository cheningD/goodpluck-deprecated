import { ErrorMessage, Field, Form } from "formik"

import { Link } from "gatsby"
import styled from "styled-components"

export const MobileViewOnly = styled.div`
  display: none;
  @media screen and (max-width: 479px) {
    display: block;
  }
`

export const ButtonSmall = styled(Link)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 64px;
  padding: 18px 30px;
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
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

export const Header = styled.div`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 32px;

  @media screen and (max-width: 479px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
export const Header2 = styled.div`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin: 32px 0 16px 0;

  @media screen and (max-width: 479px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
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
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  width: 100%;
`
export const StyledForm = styled(Form)`
  font-family: Bebas Neue, sans-serif;
  width: 500px;
  padding-top: 16px;
  margin: 0 auto;

  @media screen and (max-width: 479px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const LineBreak = styled.div`
  width: 100%;
  height: 2px;
  background-color: #eaeaea;
  margin: 8px auto 16px auto;
`
const DetailCell = styled.div`
  font-family: "hk_groteskregular", sans-serif;
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 2;
  width: 100%;
  padding: 0.1em 0rem;
  overflow: hidden;
  list-style: none;

  ${({ bold }) => (bold ? "font-family: hk_grotesksemibold, sans-serif;" : "")}

  ${({ right }) => (right ? "text-align: right;" : "")}
`

export const DetailCell2 = styled(DetailCell)`
  width: 50%;
`
