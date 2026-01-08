import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import Search from './components/search.jsx'
import MovieCard from './components/movieCard.jsx'

const Index = () => {
  const [searchInput, setSearchInput] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [movieList, setMovieList] = useState([])

  const getMovieList = () => {
    try{
        
        fetch(`https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/en-US_update.json`)
          .then(res => res.json())
          .then(data => {
            setMovieList(data.images || [])
            setIsLoading(false)
          })

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getMovieList()
  }, [])
  
//   let timeoutId = null

//   useEffect(() => {
//     if (timeoutId) {
//       clearTimeout(timeoutId)
//     }
//     timeoutId = setTimeout(() => {
//       if (!searchInput) {
//         getMovieList()
//         return
//       }
//       let filteredList = movieList.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))
//       setMovieList(filteredList)
//     }, 2000)
//   }, [searchInput])

  useDebounce(() => {
    if (!searchInput) {
      getMovieList()
      return
    }
    const filteredList = movieList.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    setMovieList(filteredList)
  }, 2000, [searchInput])

  return (
    <div className='father-box'>
      <div className='header'>
        <img src='./image/movieLogo.jpg' alt='movieLogo'></img>
        <span className='header-title'>Find Movies You'll Enjoy Without the Hassle</span>
      </div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
    <div className='movieList'>
        {
          isLoading ? 'Loading...' :
          movieList.map((item, index) => (
            <MovieCard movie={item} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Index
