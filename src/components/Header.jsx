import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-24 py-4 absolute bg-gradient-to-b from-black w-full z-10'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className='w-48'/>
        <div>
            <button className='border border-solid border-white px-7 py-1 m-4 text-white rounded-md'>English</button>
            <button className='bg-red-500 text-white px-4 py-1 m-4 rounded-md'>Sign In</button>
        </div>
    </div>
  )
}

export default Header