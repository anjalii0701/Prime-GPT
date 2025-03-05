import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm ,setIsSignInForm]=useState(true)

  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
      </div>
      <form className=" p-10 bg-black/80 w-3/12 my-28 absolute mx-auto right-0 left-0 rounded-lg">
        <h1 className='font-bold text-3xl p-4 text-white'>{isSignInForm ?"Sign In" :"Sign Up"}</h1>
        {!isSignInForm &&(<input 
          type="text"
          placeholder='Full Name' 
          className="p-4 my-3  bg-gray-700 w-full h-1/2 text-white" />)
        }
        <input 
          type="text"
          placeholder='Email Address' 
          className="p-4 my-3  bg-gray-700 w-full h-1/2 text-white" />
        <input t
        type="password" 
        placeholder='Password' 
        className="p-4 my-3 bg-gray-700 w-full h-1/2 text-white" />
        <button className="p-4 my-4 bg-red-700 text-white w-full rounded-lg">{isSignInForm ?"Sign In" : "Sign Up"}</button>
        <p className="text-white hover:text-gray-500 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix ? Sign up now " :"Already registered ? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;
