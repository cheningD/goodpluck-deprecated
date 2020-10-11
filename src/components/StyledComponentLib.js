import { Link } from "gatsby"
import styled from "styled-components"

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
