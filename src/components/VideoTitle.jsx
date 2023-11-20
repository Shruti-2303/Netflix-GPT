import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[10%] px-6 md:px-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-3xl font-bold w-1/4'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>
        <div>
            <button className=' bg-white text-black rounded-md mt-2 mr-2 py-1 px-2 md:py-2 md:px-6 md:text-lg font-semibold'>▶️ Play</button>
            <button className='hidden md:inline-block bg-gray-500 text-white bg-opacity-50 py-2 px-5 rounded-md mx-2 text-lg font-semibold'>ℹ️ More Info</button>
        </div>
    </div>
    
  )
}

export default VideoTitle