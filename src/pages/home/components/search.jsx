import React from 'react'

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <>
        <input
          className='search-input'
          type='text'
          placeholder='Search for a movie'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
    </>
  )
}

export default Search