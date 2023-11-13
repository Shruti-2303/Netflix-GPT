import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[10%] px-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold w-1/4'>{title}</h1>
        <p className='py-6 text-sm w-1/4'>{overview}</p>
        <div>
            <button className=' bg-white text-black rounded-md mr-2 py-2 px-6 text-lg font-semibold'>▶️ Play</button>
            <button className='bg-gray-500 text-white bg-opacity-50 py-2 px-5 rounded-md mx-2 text-lg font-semibold'>ℹ️ More Info</button>
        </div>
    </div>
    
  )
}

export default VideoTitle