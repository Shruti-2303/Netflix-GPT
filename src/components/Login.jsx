import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg-img" />
        </div>
        <form className='absolute w-4/12 bg-black bg-opacity-75 my-36 mx-auto left-0 right-0 p-20 rounded-lg'>
          <div className='font-bold text-3xl pb-4 text-white'>{isSignIn ? "Sign In":"Sign Up"}</div>
          {!isSignIn && <input type="text" placeholder='Full Name' className='p-4 my-2 w-full rounded-md bg-[#333]'/>}
          <input type="email" placeholder='Email or Phone Number' className='p-4 my-2 w-full rounded-md bg-[#333]'/>
          <input type="password" placeholder='Password' className='p-4 my-2 w-full rounded-md bg-[#333]'/>
          <button className='p-4 my-6 bg-red-700 text-white w-full rounded-md font-bold'>{isSignIn ? "Sign In":"Sign Up"}</button>
          <p className='text-gray-400'>{isSignIn ? "New to Netflix?":"Already registered?"} <span className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "Sign up now":"Sign In now"}</span></p>
        </form>
        
    </div>
  )
}

export default Login