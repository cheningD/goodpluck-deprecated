import { Card, H2 } from '../components/StyledComponentLib'
import { Heading, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { centsToString } from '../util'
import { getBalance } from '../actions'

export default function Balance({}) {
  const [balance, setBalance] = useState<number | null>(null)

  const fetchBalance = async () => {
    // GET Balance
    const balance: number = (await getBalance()).balance
    if (balance) {
      setBalance(balance)
    }
  }

  useEffect(() => {
    if (balance === null) {
      fetchBalance()
    }
  }, [])

  if (balance === null) {
    return (
      <>
        <H2>Credits</H2>
        <Card>
          <Spinner color="var(--peach-bg)" />
        </Card>
      </>
    )
  }

  return (
    <>
      <H2>Credits</H2>
      <Card>
        <Heading fontSize="2xl">{centsToString(balance || 0)}</Heading>
        {balance > 0 ? <Text>will be applied to your next basket</Text> : <></>}
      </Card>
    </>
  )
}
