import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold pb-1.5 mb-4 w-1/4'>{title}</h1>
        <p className='py-3 text-md w-1/4'>{overview}</p>
        <div>
            <button className=' bg-white text-black rounded-md mx-2 p-2 px-6 text-lg font-semibold'>▶️ Play</button>
            <button className='bg-gray-500 text-white bg-opacity-50 p-2 px-5 rounded-md mx-2 text-lg font-semibold'>ℹ️ More Info</button>
        </div>
    </div>
    
  )
}

export default VideoTitle