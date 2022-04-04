import {
  Button,
  Center,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { getSubscriptions, updateSubscription } from '../actions'

import { IoHeart } from 'react-icons/io5'
import React from 'react'
import { mySubscriptions } from '../store'
import { useRecoilState } from 'recoil'

export const FavoriteButton = ({ sku }) => {
  const [subscriptions, setSubscriptions] = useRecoilState(mySubscriptions)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const updateSubscriptions = async () => {
    const _subscriptions = await getSubscriptions()
    if (_subscriptions) {
      setSubscriptions(_subscriptions)
    }
  }
  if (subscriptions === null) {
    return // Subscriptions havent loaded yet
  }

  let iconColor = 'peach.100'
  const addSubscription = () => {
    updateSubscription(sku, 1, 'every basket', updateSubscriptions)
  }
  const deleteSubscription = () => {
    updateSubscription(sku, 0, 'every basket', updateSubscriptions)
  }
  let clickAction = addSubscription

  //If i have no subscriptions
  if (subscriptions.length === 0) {
    clickAction = () => {
      onOpen()
    }
  }

  if (subscriptions.map(record => record.sku).includes(sku)) {
    //If already subscribed to item
    iconColor = 'peach.500'
    clickAction = deleteSubscription
  }

  return (
    <>
      <Icon
        as={IoHeart}
        onClick={clickAction}
        color={iconColor}
        _hover={{
          color: 'peach.400',
        }}
      />
      <AddSubscriptionModal isOpen={isOpen} onClose={onClose} onConfirm={addSubscription} />
    </>
  )
}

const AddSubscriptionModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Add to My Favorites</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text align={'center'} maxW={'300px'} mx={'auto'}>
            We'll add your favorites to your default basket from now on!
          </Text>
        </ModalBody>
        <ModalFooter justifyContent={'center'}>
          <Button
            colorScheme="brand"
            onClick={() => {
              onConfirm()
              onClose()
            }}
          >
            Let's do it!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
