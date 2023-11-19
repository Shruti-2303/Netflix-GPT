import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-40 pr-4'>
        <img src={IMG_URL + posterPath} alt="Movie Image" />
    </div>
  )
}

export default MovieCards