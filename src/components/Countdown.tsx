import React, { useEffect, useRef, useState } from 'react'

import { DateTime } from 'luxon'

const Countdown = ({ startTime }) => {
  let content
  const [countdown, setCountdown] = useState('')

  const diff = () =>
    startTime
      .diff(DateTime.local())
      .toFormat(`d 'days' h 'hours' m 'minutes and' s 'seconds'`)
      .replace('1 days', '1 day')
      .replace('0 days', '')
      .replace(' 1 hours', ' 1 hour')
      .replace(' 1 minutes', ' 1 minute')
      .replace(' 1 seconds', ' 1 second')

  content = (
    <div>
      <h3>The market opens at {startTime.toFormat(`h a 'on' LLL dd`)}</h3>
      <h3>Come back in: {countdown || diff()} </h3>
    </div>
  )

  const interval: any = useRef()

  useEffect(() => {
    interval.current = setInterval(() => {
      setCountdown(diff())
    }, 1000)
    // move clean up function to here:
    return () => {
      clearInterval(interval.current)
      interval.current = null
    }
  }, [])

  return content
}

export default Countdown
