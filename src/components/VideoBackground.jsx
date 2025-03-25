import React from 'react';
import { useSelector} from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movie_id}) => {
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
  
  useMovieTrailer(movie_id);

  
  
  return (
    <div className="">
      <iframe className="w-screen aspect-video"
        
        title="Cleaner | Official Trailer" 
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
        
      </iframe>
    </div>
  )
}

export default VideoBackground;
