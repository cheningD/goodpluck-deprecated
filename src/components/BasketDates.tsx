import { Card } from '../components/StyledComponentLib'
import { DateTime } from 'luxon'
import React from 'react'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  min-width: 350px;
  max-width: 500px;
  margin: 0 auto;
`

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
  min-width: 200px;
  margin-left: 8px;
  flex-grow: 4;
`
const DetailListItem = styled.li`
  font-size: 14px;
  list-style: none;
  line-height: 30px;
  display: block;
  padding-left: 8px;

  span {
    line-height: inherit;
    text-align: right;
    padding-left: 16px;
    float: right;
    color: #5c5c5c;
  }
`

const isoToNiceDate = (isoString: string, showTime: boolean = false) => {
  const hour = showTime ? `ha` : ''
  return DateTime.fromISO(isoString).toFormat(`ccc, LLL dd ${hour}`)
}

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
    <StyledCard paused={isPaused}>
      <Container>
        <CheckboxList>
          <CheckboxListItem active={scheduledStatus === 'active'} done={scheduledStatus === 'done'} />
          <CheckboxListItem active={editStatus === 'active'} done={editStatus === 'done'} />
          <CheckboxListItem active={chargedStatus === 'active'} done={chargedStatus === 'done'} />
          <CheckboxListItem active={deliveredStatus === 'active'} done={deliveredStatus === 'done'} />
        </CheckboxList>
        <DetailList>
          <DetailListItem>Confirm Your Order</DetailListItem>
          <DetailListItem>
            Customize your basket
            <span>
              {isoToNiceDate(editBasketStartDate, true)} - {isoToNiceDate(editBasketEndDate, true)}
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
    </StyledCard>
  )
}

export default BasketDates
