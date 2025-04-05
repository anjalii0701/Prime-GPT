import React from 'react';
import { Search, X } from "lucide-react"; 
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, toggleSearchSlice } from '../utils/searchSlice';
import useSearchMovies from '../hooks/useSearchMovies';

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleCloseSearch = () => {
    dispatch(setQuery("")); // clear the input
    dispatch(toggleSearchSlice()); // collapse the search bar
  };
  useSearchMovies(); 

  return (
    <div className="relative w-96">
      <div className="relative">
        <Search className="text-gray-100 absolute left-3 top-1/4" />
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={handleInputChange}
          className="border pl-14 p-2 rounded-full w-full bg-black text-white outline-none pr-14"
        />
      </div>

      <X
        className="absolute right-3 top-1/4 text-gray-100 w-5 h-5 cursor-pointer"
        onClick={handleCloseSearch}
      />
    </div>
  );
};

export default SearchBar;
