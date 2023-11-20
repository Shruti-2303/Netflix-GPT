import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='flex flex-col md:flex-row justify-between px-5 py-2 absolute bg-gradient-to-b from-black w-full z-10 '>
        <img src={LOGO} alt="logo" className='w-28 mx-auto md:mx-0'/>
        <div className='flex p-2 justify-between'>
            {showGptSearch && user && <select className=' bg-white px-4 py-1 md:m-4 m-2 text-black rounded-md font-semibold' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}
            {user && <button className='border border-solid border-white px-7 py-1 md:m-4 m-2 text-white rounded-md font-semibold' onClick={handleGptSearchClick}>{showGptSearch ? "Home": "GPT Search"}</button>}
            {user && <button className='bg-red-500 text-white px-4 py-1 m-2 md:px-4 md:py-1 md:m-4 rounded-md' onClick={handleClickButton}>Sign Out</button>}
        </div>
    </div>
  )
}

export default Header