import { Button, Container, HStack, Heading, Progress, Stack, Text, VStack } from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'
import React from 'react'
import Seo from '../components/Seo'
import { SimpleNav } from './SimpleNav'

type FormLayoutProps = {
  children: any
  progress: number
  heading?: string
  subheading?: string
  submitStr?: string
  isLoading: boolean
  goBackFunc?: Function
  onSubmit: Function
  handleSubmit: Function
  isSubmitDisabled?: boolean
  blurb?: any
  sidebar?: any
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
  isSubmitDisabled = false,
  blurb,
  sidebar,
}: FormLayoutProps) => {
  return (
    <>
      <Seo title="Signup | Goodpluck" />
      <SimpleNav />
      <Stack
        bgColor="var(--light-bg)"
        direction={['column', 'column', 'column', 'row']}
        justify="center"
        px={[0, 4]}
        pb={8}
        spacing={4}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            maxW={[500, 500, 500, 600]}
            mx={[0, 'auto']}
            mt={[4, 12]}
            overflow="hidden"
            p={4}
            spacing={8}
          >
            <HStack justify="space-between" align="center">
              {goBackFunc ? <ArrowBackIcon w={6} h={6} onClick={() => goBackFunc()} /> : ''}
              <Container w={[250, 400, 450]} px={2}>
                <Progress colorScheme="brand" size="sm" value={progress} />
              </Container>
            </HStack>
            <Heading textAlign="center">{heading}</Heading>
            {subheading ? <Text textAlign="center">{subheading}</Text> : ''}
            {children}
            <Button
              type="submit"
              isLoading={isLoading}
              loadingText="Working"
              isDisabled={isSubmitDisabled}
              colorScheme="brand"
              w="100%"
              _hover={{
                _disabled: {
                  bgColor: 'brand.500',
                  color: 'white',
                },
                bgColor: 'brand.600',
                color: 'peach.300',
              }}
            >
              {submitStr || 'Continue'}
            </Button>
            {blurb}
          </VStack>
        </form>
        <div>{sidebar}</div>
      </Stack>
    </>
  )
}
