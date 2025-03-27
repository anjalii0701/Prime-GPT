import React from 'react';
import playIcon from '../images/playIcon.png';
import infoIcon from '../images/infoIcon.png';



const VideoTitle = ({title ,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[13%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className =" text-6xl font-bold">{title}</h1>
      <p className ="py-6 text-lg w-1/3">{overview}</p>
      <div className='flex items-center'>
        
        <button 
          className=" min-w-[140px]  py-3 flex items-center  bg-white text-black p-4 px-12 text-lg font-semibold rounded-lg hover:opacity-70 ">
            <img src={playIcon} className='h-8 w-8 mr-2' /> Play 
        </button>
        
        <button 
          className="flex items-center min-w-[140px]  py-3 bg-gray-500 text-white font-semibold p-4 px-12 mx-2 text-lg opacity-70 rounded-lg">
            <img src={infoIcon} className='h-8 w-8 mr-2'/>
             More Info </button>
        
      </div>
    </div> 
  );
};

export default VideoTitle;
