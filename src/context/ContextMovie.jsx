import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";

const MoviesContext = createContext();
const TrendingKey = "cfa92eb8ff8fc7290ac04b1ad017984c";
const SearchKey = "7a790130";
function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [queryMovie, setQueryMovie] = useState("");
  const [currentMovie, setCurrentMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [watchMovie, setWatch] = useState([]);
  const [error, setError] = useState();
  const [trendingMovies, setTrendingMovies] = useState([]);

  const movie = queryMovie;

  useEffect(function () {
    async function fetchTrendinMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${TrendingKey}`
        );
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendinMovies();
  }, []);

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${SearchKey}&s=${movie}`
          );
          if (!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
          setMovies(data.Search);

          if (data.Response === "False") {
            setError(data.Error);
            setMovies([]);
          } else {
            setMovies(data.Search);
            setError(null);
          }
        } catch (error) {
          console.log(error);
          setError(data.Error);
        } finally {
          setIsLoading(false);
        }
      }
      if (queryMovie.length < 3) return;
      fetchMovies();
    },
    [movie]
  );

  async function getMovie(id) {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${SearchKey}&i=${id}`
      );
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      setCurrentMovie(data);
    } catch (Error) {
      alert("Error while fetching the data");
    }
  }

  function handleAddWatchList(movie) {
    setWatch((watchMovie) => [...watchMovie, movie]);
    console.log(setWatch);
  }
  function handleRemove(id) {
    setWatch((watchMovie) => watchMovie.filter((movie) => movie.imdbID !== id));
  }

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setQueryMovie,
        queryMovie,
        setMovies,
        currentMovie,
        getMovie,
        isLoading,
        handleAddWatchList,
        watchMovie,
        error,
        trendingMovies,
        handleRemove,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

function getMoviesProp() {
  const context = useContext(MoviesContext);
  if (context === undefined) throw new "error"();
  return context;
}

export { MoviesProvider, getMoviesProp };
