import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MoviesCard = ({posterPath}) => {
 


  return (
    <div className="w-36 pr-4">
      <img alt="MovieCard"
      src ={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MoviesCard;

