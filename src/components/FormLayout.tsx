import { Button, Heading, Progress, Stack, Text } from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'
import React from 'react'

type FormLayoutProps = {
  children: any
  progress?: number
  heading?: string
  subheading?: string
  submitStr?: string
  isLoading: boolean
  goBackFunc?: Function
  onSubmit: Function
  handleSubmit: Function
  isSubmitDisabled?: boolean
}

export const FormLayout = ({
  children,
  progress,
  heading,
  subheading,
  submitStr,
  isLoading,
  goBackFunc,
  handleSubmit,
  onSubmit,
  isSubmitDisabled,
}: FormLayoutProps) => {
  const progressBar = progress ? <Progress colorScheme="green" size="sm" value={progress} /> : ''
  const header = heading ? <Heading textAlign="center">{heading}</Heading> : ''
  const subheader = subheading ? <Text textAlign="center">{subheading}</Text> : ''
  const backArrow = goBackFunc ? (
    <ArrowBackIcon
      onClick={() => {
        goBackFunc()
      }}
    />
  ) : (
    ''
  )
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="8" p="4" mx={[0, 'auto']} maxW="500px">
        {backArrow}
        {progressBar}
        {header}
        {subheader}
        {children}
        <Button type="submit" isLoading={isLoading} isDisabled={isSubmitDisabled || false} colorScheme="orange">
          {submitStr || 'Continue'}
        </Button>
      </Stack>
    </form>
  )
}
