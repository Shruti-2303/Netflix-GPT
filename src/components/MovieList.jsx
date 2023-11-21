import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
    console.log(movies);
    if (movies == null) {
      return null;
    }
  return (
    <div>
      <div className='text-lg md:text-xl py-2 text-white'>{title}</div>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
            {movies.map(movie=><MovieCards posterPath={movie?.poster_path}/>)}            
        </div>
      </div>
    </div>
    
    
  )
}

export default MovieList