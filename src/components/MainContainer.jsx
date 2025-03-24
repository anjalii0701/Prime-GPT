import React from 'react';
import VideoTitle from "./VideoTitle";
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies =useSelector((store)=>store.movies?.nowPlayingmovies);

  if (!movies || movies.length === 0) return null; 

  const mainMovie = movies[0];
  console.log(mainMovie);

  const {original_title ,overview ,title}= mainMovie;
  console.log(original_title);
  console.log(title);
  console.log(overview);



  return (
    <div>
      <VideoTitle title={original_title || title} overview={overview} />

      <VideoBackground/>
    </div>
  );
};


export default MainContainer
