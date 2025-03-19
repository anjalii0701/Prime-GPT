import React, { useState ,useRef} from 'react';
import Header from './Header';
import {checkValidateData} from "../utils/validate" ;
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isSignInForm ,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();

  const email=useRef(null);
  const password=useRef(null);

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
      console.log(user);
      navigate("/browse");
   
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
    console.log(user);
    navigate("browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+ "-" +errorMessage);
  });
    }



  }

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
      </div>
      <form onSubmit ={(e)=>e.preventDefault()}className=" p-10 bg-black/80 w-3/12 my-36 absolute mx-auto right-0 left-0 rounded-lg">
        <h1 className='font-bold text-3xl p-4 text-white'>{isSignInForm ?"Sign In" :"Sign Up"}</h1>
        {!isSignInForm &&(<input 
          type="text"
          placeholder='Full Name' 
          className="p-4 my-3  bg-gray-700 w-full h-1/2 text-white" />)
        }
        <input 
          ref={email}
          type="text"
          placeholder='Email Address' 
          className="p-4 my-3  bg-gray-700 w-full h-1/2 text-white" />
        <input 
        ref={password}
        type="password" 
        placeholder='Password' 
        className="p-4 my-3 bg-gray-700 w-full h-1/2 text-white" />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 text-white w-full rounded-lg cursor-pointer" onClick={handleButtonClick}>{isSignInForm ?"Sign In" : "Sign Up"}</button>
        <p className="text-white hover:text-gray-500 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix ? Sign up now " :"Already registered ? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;
