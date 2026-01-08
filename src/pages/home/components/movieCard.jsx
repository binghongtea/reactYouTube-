import React from 'react'

const movieCard = ({ movie: { id, title, copyright } }) => {
  return (
    <div className='movieItem' key={id}>
              <img src='./image/movieLogo.jpg' alt={title}></img>
              <div className='movieInfo'>
                <span className='movieTitle'>{title}</span>
                <span className='movieYear'>{copyright}</span>
              </div>
            </div>
  )
}

export default movieCard