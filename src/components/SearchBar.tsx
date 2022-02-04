import { Box, Button, Input, Stack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

import debounce from 'lodash-es/debounce'

const SearchBar = ({ fullscreen, updateSearchTerm, onOpen }) => {
  const [searchTerm, setSearchTerm] = useState('')
  // Store ref  to the debounced func https://rajeshnaroth.medium.com/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3
  const updateSearchTermDebounced = useRef(debounce(updateSearchTerm, 100)).current

  if (fullscreen) {
    return (
      <Content
        fullscreen={fullscreen}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        updateSearchTermDebounced={updateSearchTermDebounced}
        onOpen={onOpen}
      />
    )
  } else {
    return (
      <Box w="full" display={['block', 'block', 'none']} position="sticky" top={0} zIndex={1}>
        <Content
          fullscreen={fullscreen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          updateSearchTermDebounced={updateSearchTermDebounced}
          onOpen={onOpen}
        />{' '}
      </Box>
    )
  }
}

export default SearchBar

const Content = ({ fullscreen, onOpen, setSearchTerm, searchTerm, updateSearchTermDebounced }) => {
  return (
    <Stack
      mx={0}
      position="sticky"
      bg="white"
      px={fullscreen ? 0 : 2}
      py={2}
      w="full"
      direction={fullscreen ? 'column' : 'row'}
    >
      {fullscreen ? (
        ''
      ) : (
        <Button colorScheme="brand" onClick={onOpen} w="100px">
          Menu
        </Button>
      )}
      <Input
        type="text"
        placeholder="Search all products"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value)
          updateSearchTermDebounced(e.target.value)
        }}
      />
      {searchTerm ? (
        <Button
          variant="ghost"
          onClick={() => {
            setSearchTerm('')
            updateSearchTermDebounced('')
          }}
        >
          Clear Search
        </Button>
      ) : (
        ''
      )}
    </Stack>
  )
}
