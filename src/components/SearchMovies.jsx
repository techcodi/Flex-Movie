import { getMoviesProp } from "../context/ContextMovie";
import { Link, NavLink } from "react-router-dom";
import Spinner from "./Spinner";
import "./SearchMovies.css";
import "../assets/pages/HomeMovies.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function SearchMovies() {
  const { movies, setQueryMovie, queryMovie, isLoading, error, id } =
    getMoviesProp();

  return (
    <div className="s-section">
      <div className="movies-nav">
        <h1>🍿FlexMovix</h1>

        <Link to="/home">
          {" "}
          <HomeRoundedIcon />
        </Link>
        <input
          type="search"
          value={queryMovie}
          onChange={(e) => setQueryMovie(e.target.value)}
          placeholder="Search"
        />
        <NavLink to="/watch">
          <BookmarkIcon />
        </NavLink>
        <p>{movies.length} Movies found</p>
      </div>

      <div>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="movies-display">
            {isLoading ? (
              <Spinner />
            ) : (
              <ul className="movies-list">
                {movies?.map((movie) => (
                  <li key={movie.imdbID}>
                    <Link to={`/movies/${movie.imdbID}`}>
                      <img src={movie.Poster} alt={`${movie.Title} poster`} />
                      <h3>{movie.Title}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      <div className="m-home-nav">
        <h1></h1>
        <ul className="m-nav">
          <li>
            <NavLink to="/home">
              Home <HomeRoundedIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">
              Search <SearchIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/watch">
              Watch list <BookmarkIcon />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchMovies;
