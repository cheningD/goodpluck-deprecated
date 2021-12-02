import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CheckCircleIcon, PhoneIcon, SmallAddIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

import GatsbyLink from 'gatsby-link'
import StripeCardElement from './StripeCardElement'

const EmailBlock = ({ register, errors }) => {
  return (
    <VStack spacing={4} align="start">
      <HStack w="100%">
        <FormControl id="first" isRequired isInvalid={!!errors.first}>
          <FormLabel>First name</FormLabel>
          <FormErrorMessage>{errors.first?.message}</FormErrorMessage>
          <Input placeholder="First name" {...register('first')} />
        </FormControl>
        <FormControl id="last" isRequired isInvalid={!!errors.last}>
          <FormLabel>Last name</FormLabel>
          <FormErrorMessage>{errors.last?.message}</FormErrorMessage>
          <Input placeholder="Last name" {...register('last')} />
        </FormControl>
      </HStack>
      <FormControl id="email" isRequired isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        <Input type="email" placeholder="Email" {...register('email')} />
      </FormControl>
    </VStack>
  )
}

const AddressBlock = ({ register, errors, addressLine2 }) => {
  const [showAddressLine2, setShowAddressLine2] = useState(false)
  return (
    <VStack spacing={4} align="start">
      <FormControl id="addressLine1" isRequired isInvalid={!!errors.addressLine1}>
        <FormLabel>Address</FormLabel>
        <Input placeholder="e.g. 2648 W Grand Blvd" {...register('addressLine1')} />
        <FormErrorMessage>{errors.addressLine1?.message}</FormErrorMessage>
      </FormControl>
      {showAddressLine2 || addressLine2 ? (
        <FormControl id="addressLine2" isInvalid={!!errors.addressLine2}>
          <FormLabel>Apt, suite, etc</FormLabel>
          <Input placeholder="e.g. Apt 1B" {...register('addressLine2')} />
          <FormErrorMessage>{errors.addressLine2?.message}</FormErrorMessage>
        </FormControl>
      ) : (
        <Text textColor="green.500" onClick={() => setShowAddressLine2(true)}>
          <SmallAddIcon /> Apt, suite, etc
        </Text>
      )}
      <FormControl id="zip" isRequired isInvalid={!!errors.zip}>
        <FormLabel>Zip code</FormLabel>
        <HStack spacing={4}>
          <Input type="zip" isDisabled placeholder="e.g 48201" {...register('zip')} />
          <Link color="teal.500" fontSize="l" as={GatsbyLink} to="/signup">
            edit
          </Link>
        </HStack>
        <FormErrorMessage>{errors.zip?.message}</FormErrorMessage>
      </FormControl>
      <FormControl id="phone" isRequired isInvalid={!!errors.phone}>
        <FormLabel>Phone</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<PhoneIcon color="gray.300" />} />
          <Input type="tel" placeholder="e.g. 313 555 1234" {...register('phone')} />
        </InputGroup>
        <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
      </FormControl>
      <FormControl id="instructions" isInvalid={!!errors.instructions}>
        <FormLabel>Delivery Instructions</FormLabel>
        <Input placeholder="e.g Building Code = 1234, by the front door" {...register('instructions')} />
        <FormErrorMessage>{errors.instructions?.message}</FormErrorMessage>
      </FormControl>
    </VStack>
  )
}

const CheckoutFields = ({
  first,
  last,
  email,
  addressLine1,
  addressLine2,
  zip,
  phone,
  register,
  errors,
  stage,
  setStage,
  stage0IsValid,
  stage1IsValid,
  stage2IsValid,
  stripeError,
  setStripeError,
}) => {
  return (
    <Accordion index={[stage]} allowToggle>
      <AccordionItem>
        <AccordionButton
          onClick={() => {
            if (stage > 0) {
              setStage(0)
            }
          }}
        >
          <HStack spacing={4}>
            <CheckCircleIcon color={stage0IsValid ? 'green.500' : 'gray'} />
            {stage0IsValid && stage != 0 ? (
              <VStack alignItems="start">
                <Heading flex="1" fontSize="md" textAlign="start">
                  {first} {last}
                  <Heading fontSize="md" textAlign="start">
                    {email}
                  </Heading>
                </Heading>
              </VStack>
            ) : (
              <Heading fontSize="xl" textColor="gray.500">
                Name & Email
              </Heading>
            )}
          </HStack>
          {stage === 0 ? <div></div> : <AccordionIcon />}
        </AccordionButton>
        <AccordionPanel py={4} px={0}>
          <EmailBlock register={register} errors={errors} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          onClick={() => {
            if (stage0IsValid) {
              setStage(1)
            }
          }}
        >
          <HStack spacing={4}>
            <CheckCircleIcon color={stage1IsValid ? 'green.500' : 'gray'} />
            <VStack alignItems="start">
              {stage1IsValid && stage !== 1 ? (
                <Heading fontSize="md" textAlign="start">
                  {addressLine1 && addressLine2 ? `${addressLine1}, ${addressLine2}` : `${addressLine1 || ''}`}
                  <Heading fontSize="md" textAlign="start">
                    {phone ? `${zip}, ${phone}` : `${zip || ''}`}
                  </Heading>
                </Heading>
              ) : (
                <Heading fontSize="xl" textColor="gray.500">
                  Delivery Address
                </Heading>
              )}
            </VStack>
          </HStack>
          {stage < 2 ? <div></div> : <AccordionIcon />}
        </AccordionButton>
        <AccordionPanel py={4} px={0}>
          {stage >= 1 ? <AddressBlock register={register} errors={errors} addressLine2={addressLine2} /> : ''}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          justifyContent="start"
          onClick={() => {
            // Do not allow progress if stage0 is invalid
            if (stage0IsValid && stage1IsValid) {
              setStage(3)
            }
          }}
        >
          <HStack spacing={4}>
            <CheckCircleIcon color={stage2IsValid ? 'green.500' : 'gray'} />
            <VStack>
              <Heading fontSize="xl" textColor="gray.500">
                Enter a payment method
              </Heading>
            </VStack>
          </HStack>
        </AccordionButton>
        <AccordionPanel py={4} px={0}>
          <StripeCardElement stripeError={stripeError} setStripeError={setStripeError} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default CheckoutFields
