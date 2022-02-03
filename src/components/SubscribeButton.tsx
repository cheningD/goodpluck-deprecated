import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'

import React from 'react'

const customStylesSelect = {
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   // width: '200px',
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1
  //   const transition = 'opacity 300ms'
  //   const color = 'red'
  //   return { ...provided, opacity, transition, color }
  // },
}

const frequencyOptions = [
  { value: 'every week', label: 'every week' },
  { value: 'every other week', label: 'every other week' },
]

interface SubscribeButtonProps {
  name: string
  unitLabel: string
  unitQuantity: number
}

const SubscribeButton = ({ name, unitQuantity, unitLabel }: SubscribeButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const qtyOptions = [
    { value: 1, label: `${1 * unitQuantity}  ${unitLabel}` },
    { value: 2, label: `${2 * unitQuantity}  ${unitLabel}` },
    { value: 3, label: `${3 * unitQuantity}  ${unitLabel}` },
    { value: 4, label: `${4 * unitQuantity}  ${unitLabel}` },
    { value: 5, label: `${5 * unitQuantity}  ${unitLabel}` },
    { value: 6, label: `${6 * unitQuantity}  ${unitLabel}` },
    { value: 7, label: `${7 * unitQuantity}  ${unitLabel}` },
    { value: 8, label: `${8 * unitQuantity}  ${unitLabel}` },
    { value: 9, label: `${9 * unitQuantity}  ${unitLabel}` },
  ]

  const _l = (quantity: number) => `${quantity * unitQuantity}  ${unitLabel}`

  return (
    <>
      <Button variant="ghost" colorScheme="brand" borderRadius="4px" _hover={{ bg: 'peach.100' }} onClick={onOpen}>
        Subscribe
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Subscribe & Save</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} p={0} m={0} align="flex-start">
              <Text fontSize="sm">Save 10% when you add $50 to your subscriptions</Text>
              <Text mv={4}>
                Add{' '}
                <Select
                  display="inline-block"
                  fontWeight="600"
                  variant="filled"
                  focusBorderColor="peach.400"
                  w="fit-content"
                  my={4}
                  mx={2}
                >
                  <option value={1}>{_l(1)}</option>
                  <option value={2}>{_l(2)}</option>
                  <option value={3}>{_l(3)}</option>
                  <option value={4}>{_l(4)}</option>
                </Select>
                {name} to my basket{' '}
                <Select
                  display="inline-block"
                  variant="filled"
                  w="fit-content"
                  focusBorderColor="peach.400"
                  fontWeight="600"
                >
                  <option value="every week">every week</option>
                  <option value="every other week">every other week</option>
                </Select>
              </Text>
              <Text as="i" color="gray.500">
                First delivery this Saturday
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="brand">Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SubscribeButton
