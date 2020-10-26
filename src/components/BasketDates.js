import { Bold, Card } from "../components/StyledComponentLib"

import React from "react"
import styled from "styled-components"

const Text = styled.div`
  font-family: hk_grotesklight, sans-serif;
  width: 100%;
  text-align: left;
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`
const CheckboxList = styled.ul`
  width: 22px;
  display: block;
  margin: 5px 0px 0px;
  padding-top: 0px;
  padding-inline-start: 0px;
`
const CheckboxListItem = styled.li`
  &::after {
    content: "";
    width: 1px;
    height: 10px;
    line-height: 20px;
    background: var(--primary-text);
    display: block;
    text-align: center;
    margin: 0px;
    position: relative;
    left: 11px;
  }

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    line-height: 20px;
    border: 1px solid var(--primary-text);
    border-radius: 100%;
    display: block;
    text-align: center;
    margin: 0px auto;
  }

  ${props =>
    props.done
      ? `
  &::before {
    background-image: url(/check.svg);
    background-size: initial;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-position: center center;
    border-color: var(--ivy);
    background-color: var(--ivy);
  }`
      : ``}

  ${props =>
    props.active
      ? `
  &::before {
        background-image: url(/dot.svg);
    background-size: initial;
    background-repeat: no-repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-position: center center;
    background-color: var(--yellow-bg);
    border-color: var(--yellow-bg);
  }`
      : ``}
      
  &:last-of-type::after {
    display: none;
  }

  list-style: none;
  display: block;
`

const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  min-width: 200px;
  margin-left: 20px;
  flex-grow: 4;
`
const DetailListItem = styled.li`
  font-size: 14px;
  list-style: none;
  line-height: 30px;
  display: block;
  padding-left: 24px;

  span {
    line-height: inherit;
    text-align: right;
    padding-left: 24px;
    float: right;
    color: #5c5c5c;
  }
`

const BasketDates = () => {
  const editUntilDate = "9pm on Oct 29"

  return (
    <Card>
      <Text>
        You can <Bold>edit</Bold> your basket until <Bold>{editUntilDate}</Bold>
      </Text>
      <Container>
        <CheckboxList>
          <CheckboxListItem done></CheckboxListItem>
          <CheckboxListItem active></CheckboxListItem>
          <CheckboxListItem></CheckboxListItem>
          <CheckboxListItem></CheckboxListItem>
        </CheckboxList>
        <DetailList>
          <DetailListItem>Scheduled</DetailListItem>
          <DetailListItem>
            Customize your basket<span>Oct 24th - Oct 29th</span>
          </DetailListItem>
          <DetailListItem>
            Card charged<span>Thurs, Oct 29th</span>
          </DetailListItem>
          <DetailListItem>
            On your doorstep<span>Sat, Oct 31st</span>
          </DetailListItem>
        </DetailList>
      </Container>
    </Card>
  )
}

export default BasketDates
