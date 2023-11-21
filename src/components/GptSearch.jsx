import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10 '>
            <img className="min-h-screen object-cover bg-cover bg-center" src={BG_IMG} alt="bg-img" />
        </div>
        <div>
          <GptSearchBar/>
          <GptMovieSuggestions/>
        </div>
        
    </div>
  )
}

export default GptSearch