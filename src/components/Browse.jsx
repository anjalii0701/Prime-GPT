import React from 'react';
import Header from "./Header";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import SearchOverlay from "./SearchOverlay";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  
  // Get search state
  const isTyping = useSelector((state) => state.search.isTyping);

  return (
    <div className="relative">
      {/* Header should always be visible */}
      <Header />

      {/* Content Below Header */}
      <div className=""> {/* Adjust margin so content starts after header */}
        {isTyping ? <SearchOverlay /> : ( 
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
