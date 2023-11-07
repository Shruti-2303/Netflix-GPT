import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const handleClickButton = () => {
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse");
      } else {
          dispatch(removeUser());
          navigate('/')
          
      }
    });
    // Unsubscribe when the component unmounts 
    return () => unsubscribe();
  },[])

  return (
    <div className='flex justify-between px-24 py-4 absolute bg-gradient-to-b from-black w-full z-10'>
        <img src={LOGO} alt="logo" className='w-48'/>
        <div>
            <button className='border border-solid border-white px-7 py-1 m-4 text-white rounded-md'>English</button>
            {user && <button className='bg-red-500 text-white px-4 py-1 m-4 rounded-md' onClick={handleClickButton}>Sign Out</button>}
        </div>
    </div>
  )
}

export default Header