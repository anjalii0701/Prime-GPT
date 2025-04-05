import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from '../utils/constants';

const SearchOverlay = () => {
  const isTyping = useSelector((state) => state.search.isTyping);
  const searchResults = useSelector((state) => state.movies.SearchMovies);

  if (!isTyping) return null;

  return (
    <div className="fixed top-16 left-0 w-full z-30 bg-black text-white h-[calc(100vh-4rem)] p-6 flex flex-col items-center justify-center">
      {searchResults?.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-red-600">Search Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 bg-black mx-20 rounded-lg relative">
            {searchResults.map((movie) => (
              <div key={movie.id} className="text-white flex flex-col items-center">
                <img
                  src={IMG_CDN_URL + movie.poster_path}
                  alt={movie.title}
                  className="w-40 h-72 object-cover rounded-lg cursor-pointer"
                />

                <p className="text-white text-center mt-2 text-sm">{movie.title}</p>
                
              </div>

            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Nothing Found with this Keywords.</h2>
          <div className="w-40 h-1 bg-red-600 mt-2"></div>
        </div>
      )}
    </div>
  );
};

export default SearchOverlay;
