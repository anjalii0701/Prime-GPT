import React from 'react';
import Browse from './Browse';
import Login from './Login';
import {useEffect} from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {addUser ,removeUser} from "../utils/userSlice";
import { useDispatch } from "react-redux";



const Body = () => {
    const dispatch =useDispatch();

    const appRouter =createBrowserRouter([
        {
            path:'/',
            element:<Login/>,
        },
        {
            path:'/browse',
            element:<Browse/>,
        }
    ]);

    
    useEffect(()=>{  
    onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email ,displayName} = user;
      dispatch(addUser({uid:uid ,email:email, displayName:displayName}));
    } 
    else {
      dispatch(removeUser());
    }
  });
    } ,[]);




  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
    
  );
};

export default Body;
