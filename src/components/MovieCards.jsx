import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-40 pr-4 mr-2 sm:mr-3'>
        <img src={IMG_URL + posterPath} alt="Movie Image" className='rounded-lg' />
    </div>
  )
}

export default MovieCards