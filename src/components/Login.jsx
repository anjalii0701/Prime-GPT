import React, { useState ,useRef} from 'react';
import Header from './Header';
import {checkValidateData} from "../utils/validate" ;
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {BG_URL, USER_AVATAR} from '../utils/constants';
import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';


const Login = () => {
  const dispatch =useDispatch();

  const [isSignInForm ,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const name =useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const langId =useSelector((store)=>store.config.lang);
  

  const handleButtonClick=()=>{
    //Validate the form data
    const message=checkValidateData( email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;

    //sign In /Sign Up Logic

    if(!isSignInForm){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value ,
        photoURL: USER_AVATAR
      }).then(() => {
        const { uid, email ,displayName ,photoURL } = auth.currentUser;

        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL ,
          })
        )
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode + "-" + errorMessage);

    
  });
    }
    else{
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }



  }

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }


  return (
    
        <div className="relative h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 ">
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="w-full h-full object-cover scale-115"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <Header />
      
      
      <form onSubmit ={(e)=>e.preventDefault()}className=" p-10 bg-black/80 w-3/12 my-36 absolute mx-auto right-0 left-0 rounded-lg">
        <h1 className='font-bold text-3xl p-4 text-white'>{isSignInForm ?lang[langId].signInHeading:lang[langId].signUp}</h1>
        {!isSignInForm &&(<input 
          ref={name}
          type="text"
          placeholder={lang[langId].fullName} 
          className='w-full p-3 my-2 border text-white text-lg rounded focus:outline-none focus:ring-2 focus:ring-white-600' />)
        }
        <input 
          ref={email}
          type="text"
          placeholder={lang[langId].email} 
          className='w-full p-3 my-2 border text-white text-lg rounded focus:outline-none focus:ring-2 focus:ring-white-600' />
        <input 
        ref={password}
        type="password" 
        placeholder={lang[langId].password}
        className='w-full p-3 my-2 border text-white text-lg  rounded focus:outline-none focus:ring-2 focus:ring-white-600' />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 text-lg  text-white w-full rounded-lg cursor-pointer hover:bg-red-800" onClick={handleButtonClick}>{isSignInForm ? lang[langId].signInHeading:lang[langId].signUp }</button>
        <p className="text-white hover:text-gray-500 pb-8  cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?lang[langId].newAccountForSignUp :lang[langId].alreadyRegisteredAccount}</p>
      </form>
    </div>
  );
};

export default Login;
