import React from 'react';
import {useSearchMovies} from "../hooks/useSearchMovies" ;
import { useState } from 'react';

const useSearchMovies=()=>{
  const [query,setQuery]=useState();
}


const SearchBar = () => {
  const{ query ,setQuery } = useSearchMovies();    
  return (
    <div>
      <input
      type="text"
      placeholder='Search Movies'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      className="border p-2 rounded-md w-full"


      />
   

     
      
    </div>
  )
}

export default SearchBar;
