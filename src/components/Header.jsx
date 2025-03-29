import React from 'react';
import { onAuthStateChanged ,signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addUser , removeUser} from "../utils/userSlice" ;
import { LOGO } from "../utils/constants" ;
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlic';

const Header = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch =useSelector((store)=> store.gpt.showGptSearch)
  const handleSignOut =()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
        navigate("/error")
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value)); 
  }




  return (
    <div className=" w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
      className="w-44"
      src={LOGO}
      alt='logo'
      />
      {user && (
      <div className='flex items-center p-2'>
        
        {showGptSearch &&
          <select className="p-2 bg-gray-900 m-2 text-white rounded-lg" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))}
          </select>
        }
        <button 
          className="py-2 px-2 mx-4 my-2  bg-purple-800 rounded text-white" 
          onClick ={handleGptSearchClick}>
          {showGptSearch? "Home Page" :"GPT Search"}
         </button>
        <img 
        className="w-12 h-12 p-2" 
        alt="user-icon"
        src={user?.photoURL}/>
        <button  onClick={handleSignOut} className='font-bold text-white'>
          Sign out
        </button>
      </div>
      )}
      
    </div>
     
  )
}

export default Header
