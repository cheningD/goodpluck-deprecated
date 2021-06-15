import React from 'react'
import { isoToNiceDate } from '../util'
import styled from 'styled-components'

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

interface CheckboxListItemProps {
  active: boolean
  done: boolean
}

const CheckboxListItem = styled.li<CheckboxListItemProps>`
  &::after {
    content: '';
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
    content: '';
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
  min-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 4;
`
const DetailListItem = styled.li`
  list-style: none;
  line-height: 30px;
  display: block;
  padding-left: 16px;

  span {
    line-height: inherit;
    text-align: right;
    padding-left: 16px;
    color: #5c5c5c;
  }

  // Phone screens
  @media screen and (max-width: 479px) {
    font-size: 15px;
    padding-left: 8px;
  }
`

const BasketDates = ({
  scheduledStatus, // null or "active" or "done" or "error"
  editStatus, // null or "active" or "done" or "error"
  chargedStatus, // null or "active" or "done" or "error"
  deliveredStatus, // null or "active" or "done" or "error"
  editBasketStartDate,
  editBasketEndDate,
  chargedDate,
  deliveryDate,
  isPaused,
}) => {
  return (
    <Container>
      <CheckboxList>
        <CheckboxListItem active={scheduledStatus === 'active'} done={scheduledStatus === 'done'} />
        <CheckboxListItem active={editStatus === 'active'} done={editStatus === 'done'} />
        <CheckboxListItem active={chargedStatus === 'active'} done={chargedStatus === 'done'} />
        <CheckboxListItem active={deliveredStatus === 'active'} done={deliveredStatus === 'done'} />
      </CheckboxList>
      <DetailList>
        <DetailListItem>{scheduledStatus === 'done' ? `Scheduled` : `Confirm your order`}</DetailListItem>
        <DetailListItem>
          Edit your basket
          <span>
            {isoToNiceDate(editBasketStartDate, 'LLL dd')} - {isoToNiceDate(editBasketEndDate, 'LLL d')}
          </span>
        </DetailListItem>
        <DetailListItem>
          Card charged<span>{isoToNiceDate(chargedDate)}</span>
        </DetailListItem>
        <DetailListItem>
          On your doorstep<span>{isoToNiceDate(deliveryDate)}</span>
        </DetailListItem>
      </DetailList>
    </Container>
  )
}

export default BasketDates
