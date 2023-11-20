import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/Validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  const [errMessage,setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    //Validation Check
    const message = checkValidateData(email.current.value,password.current.value);
    setErrMessage(message);
    console.log(email.current.value);
    console.log(password.current.value);
    if(message) return;
    
    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => { 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/71590370?v=4"
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        }).catch((error) => {
          setErrMessage(error.message)
        });
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode+" "+errorMessage);
      });     
    }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode+" "+errorMessage);
        });
    }
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BG_IMG} alt="bg-img" className='h-screen object-cover'/>
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className=' w-full absolute md:w-4/12 bg-black bg-opacity-75 my-36 mx-auto left-0 right-0 p-20 rounded-lg'>
          <div className='font-bold text-3xl pb-4 text-white'>{isSignIn ? "Sign In":"Sign Up"}</div>
          {!isSignIn && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-2 w-full rounded-md bg-[#333]'/>}
          <input ref={email} type="email" placeholder='Email or Phone Number' className='p-4 my-2 w-full rounded-md bg-[#333]'/>
          <input ref={password} type="password" placeholder='Password' className='p-4 my-2 w-full rounded-md bg-[#333]'/>
          <p className='text-red-700'>{errMessage}</p>
          <button className='p-4 my-6 bg-red-700 text-white w-full rounded-md font-bold' onClick={handleButtonClick}>{isSignIn ? "Sign In":"Sign Up"}</button>
          <p className='text-gray-400'>{isSignIn ? "New to Netflix?":"Already registered?"} <span className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "Sign up now":"Sign In now"}</span></p>
        </form>
        
    </div>
  )
}

export default Login