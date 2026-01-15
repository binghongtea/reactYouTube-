import React from 'react'
import styles from '../index.module.scss'

const movieCard = ({ movie: { id, title, copyright } }) => {
  return (
    <div className={styles['movieItem']} key={id}>
              <img src='./image/movieLogo.jpg' alt={title}></img>
              <div className={styles['movieInfo']}>
                <span className={styles['movieTitle']}>{title}</span>
                <span className={styles['movieYear']}>{copyright}</span>
              </div>
            </div>
  )
}

export default movieCard