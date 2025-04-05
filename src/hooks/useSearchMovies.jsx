import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearchMovies, clearSearchMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useSearchMovies = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  useEffect(() => {
    const getSearchMovies = async () => {
      if (!query.trim()) {
        dispatch(clearSearchMovies());
        return;
      }

      try {
        const searchedMovie = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
          options
        );
        if (!searchedMovie.ok) throw new Error("Failed to fetch");

        const data = await searchedMovie.json();
        dispatch(addSearchMovies(data.results));
      } catch (error) {
        console.error("Error fetching search result:", error);
      }
    };

    getSearchMovies();
  }, [query, dispatch]);
};

export default useSearchMovies;
