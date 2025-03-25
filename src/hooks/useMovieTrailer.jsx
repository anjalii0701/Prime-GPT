import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer  =(movie_id)=>{
    const dispatch =useDispatch();

    const getMovieVideos =async() =>{
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US',
          options
        );
        const json =await data.json();
  
        const filterData =json.results.filter((video) => video.type=== "Trailer");
        const trailer = filterData.length ?filterData[0] :json.results[0];
        dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(()=>{
      getMovieVideos();
    },[]);

}

export default useMovieTrailer;