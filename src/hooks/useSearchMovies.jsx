import { useDispatch } from "react-redux";
import { addSearchMovies ,clearSearchMovies } from "../utils/movieSlice";
import { useState } from 'react';
import { useEffect } from "react";
import { options } from "../utils/constants";




const useSearchMovies=()=>{
  const [query,setQuery]=useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
      const getSearchMovies =async()=>{
        if(!query.trim()){
          dispatch(clearSearchMovies())
        }

        try{
          const searchedMovie = await fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
          if(!searchedMovie.ok) throw new Error("failed to fetch");
          const data =await searchedMovie.json();
          dispatch(addSearchMovies(data.results));
        }
        catch(error){
          console.error("error fetching search result:" ,error)
        }
      }

      getSearchMovies();

  },[query, dispatch]);
  return { inputQuery: query, setInputQuery: setQuery };
}

export default useSearchMovies;