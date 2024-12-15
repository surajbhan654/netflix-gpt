import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    if(!posterPath) return;
  return (
    <div>
        <img className="flex-shrink-0 w-36 md:w-48 pr-4"
         alt='Movie card' 
         src={`${IMG_CDN_URL}${posterPath}`} 
        />
    </div>
  )
}

export default MovieCard