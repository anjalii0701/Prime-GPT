import React from 'react'
import MoviesCard from './MoviesCard';

const MovieList = ({title ,movies}) => {
    console.log("movies" ,movies);

    if (!movies || movies.length === 0) {
        return <h2>No movies available</h2>;
    }
    console.log("Poster Path:", movies[0]?.poster_path);



  return (
    <div className="px-6  ">
        <h1 className=" text-lg md:text-3xl py-4 text-white">{title}</h1>
        
        <div className="flex overflow-x-scroll scroll-">
            <div className="flex">
            {movies?.map((movie) => (
            <MoviesCard key={movie.id} posterPath={movie.poster_path} />
          ))}                
            </div>

       </div>
            
    </div>


  )
}

export default MovieList
