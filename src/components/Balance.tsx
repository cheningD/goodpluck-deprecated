import { Card, H2 } from '../components/StyledComponentLib'
import { Heading, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { centsToString } from '../util'
import { getBalance } from '../actions'

export default function Balance({}) {
  const [balance, setBalance] = useState<number | null>(null)

  const fetchBalance = async () => {
    // GET Balance
    const baljson = await getBalance()
    const bal = baljson.balance
    console.log(`Received Balance: ${baljson}`)
    if (bal) {
      setBalance(bal)
    }
  }

  useEffect(() => {
    if (balance === null) {
      fetchBalance()
    }
  }, [])

  return (
    <>
      <H2>Credits</H2>
      <Card>
        {balance === null ? (
          <Spinner color="var(--peach-bg)" />
        ) : (
          <>
            <Heading fontSize="2xl">{centsToString(balance || 0)}</Heading>
            {balance > 0 ? <Text>will be applied to your next basket</Text> : <></>}
          </>
        )}
      </Card>
    </>
  )
}
