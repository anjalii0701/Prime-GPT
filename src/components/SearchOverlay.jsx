import React from "react";
import { useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";

const SearchOverlay = () => {
  const isTyping = useSelector((state) => state.search.isTyping);
  const searchResults = useSelector((state) => state.movies.searchMovies);

  if (!isTyping) return null;

  return (
    <div className="fixed top-16 left-0 w-full z-30 bg-black text-white h-[calc(100vh-4rem)] p-6 flex flex-col items-center justify-center">
      {searchResults?.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-red-600">Search Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {searchResults.map((movie) => (
              <MoviesCard key={movie.id} movie={movie} />
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
