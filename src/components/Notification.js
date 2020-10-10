import Arrow from "../images/icons/arrow.svg"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const LinkWrapper = styled(Link)`
  max-width: 100%;
  display: inline-block;
  display: block;
  -webkit-transition: opacity 200ms ease;
  transition: opacity 200ms ease;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`

const TopNotification = styled.div`
  background-color: #3f3a40;
  text-align: center;
`

const Section = styled.section`
  padding-right: 36px;
  padding-left: 36px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;

  @media screen and (max-width: 991px) {
    padding-right: 24px;
    padding-left: 24px;
  }

  @media screen and (max-width: 767px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media screen and (max-width: 479px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`

const Grid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;

  display: -ms-grid;
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-column-gap: 36px;
  grid-row-gap: 36px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;

  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 738px;
    grid-column-gap: 24px;
    grid-row-gap: 30px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    max-width: none;
    grid-column-gap: 20px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 479px) {
    grid-column-gap: 12px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const NotificationContent = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  line-height: 24px;

  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 12;
  grid-column-start: span 12;
  -ms-grid-column-span: 12;
  grid-column-end: span 12;
`

const NotificationText = styled.div`
  font-size: 11px;
  line-height: 22px;
  font-weight: 600;
  text-transform: uppercase;
`
const WhiteArrow = styled(Arrow)`
  display: inline-block;
  margin-left: 20px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`

const Notification = () => {
  return (
    <LinkWrapper to="/getstarted">
      <TopNotification>
        <Section>
          <Grid>
            <NotificationContent>
              <NotificationText>
                New Customers in detroit: GET $30 off your first 3 orders
              </NotificationText>
              <WhiteArrow />
            </NotificationContent>
          </Grid>
        </Section>
      </TopNotification>
    </LinkWrapper>
  )
}

export default Notification
