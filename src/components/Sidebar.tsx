import * as React from 'react'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'

import SearchBar from './SearchBar'

const Sidebar = ({ links, isOpen, onOpen, onClose, setSearchTerm }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false}>
        <DrawerOverlay>
          <DrawerContent overflow="scroll">
            <DrawerCloseButton />
            <DrawerHeader>The Market</DrawerHeader>
            <DrawerBody>{links}</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* The Fullscreen version */}
      <Box
        bg="white"
        display={['none', 'none', 'inline-block']}
        minW="250px"
        overflowY="scroll"
        p={4}
        position="sticky"
        top={0}
        h="100vh"
        borderRadius="md"
      >
        <SearchBar fullscreen={true} onOpen={onOpen} updateSearchTerm={value => setSearchTerm(value)} />
        {links}
      </Box>
    </>
  )
}

export default Sidebar
