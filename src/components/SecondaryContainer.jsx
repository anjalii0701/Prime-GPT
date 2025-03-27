import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className="bg-black">
       <div className ="-mt-52 pl-12 relative z-20 ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingmovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingmovies}/>
      <MovieList title={"Popular"} movies={movies.popularmovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingmovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingmovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer;
