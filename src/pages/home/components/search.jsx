import React from 'react'
import styles from '../index.module.scss'

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <>
        <input
          className={styles['search-input']}
          type='text'
          placeholder='Search for a movie'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
    </>
  )
}

export default Search