import React, { useRef, useState } from 'react'

import { SecondaryButton } from './StyledComponentLib'
import debounce from 'lodash-es/debounce'
import styled from 'styled-components'

const Search = styled.input`
  width: 100%;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  color: #31373d;
  outline: 0;
  padding: 0.5rem;
  transition: all 0.5s ease-in-out, width 0s, height 0s;
`

const SearchBar = ({ updateSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState('')
  // Store ref  to the debounced func https://rajeshnaroth.medium.com/using-throttle-and-debounce-in-a-react-function-component-5489fc3461b3
  const updateSearchTermDebounced = useRef(debounce(updateSearchTerm, 100)).current

  return (
    <>
      <Search
        type="text"
        placeholder="Search all products"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value)
          updateSearchTermDebounced(e.target.value)
        }}
      />
      {searchTerm ? (
        <SecondaryButton
          onClick={() => {
            setSearchTerm('')
            updateSearchTermDebounced('')
          }}
        >
          Clear Search
        </SecondaryButton>
      ) : (
        ''
      )}
    </>
  )
}

export default SearchBar
