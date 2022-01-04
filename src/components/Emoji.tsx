import React from 'react'
import { Text } from '@chakra-ui/react'
const Emoji = props => (
  <Text role="img" aria-label={props.label ? props.label : ''} aria-hidden={props.label ? 'false' : 'true'} {...props}>
    {props.symbol}
  </Text>
)
export default Emoji
