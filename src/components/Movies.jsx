import { getMoviesProp } from "../context/ContextMovie";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Movies.css";
import { useState } from "react";
import Spinner from "./Spinner";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";

function Movies() {
  const [isAdded, setIsAdded] = useState();
  const [load, setLoad] = useState();
  const {
    getMovie,
    currentMovie,
    handleAddWatchList,
    movies,
    setQueryMovie,
    queryMovie,
  } = getMoviesProp();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    Title: title,
    Poster: poster,
    Year: year,
    Runtime: runtime,
    imdbRating: imdbRating,
    Released: released,
    Actors: actors,
    Director: directors,
    Genre: genre,
    Plot: plot,
    Country: country,
    Language: lang,
  } = currentMovie || {};
  useEffect(
    function () {
      getMovie(id);
    },
    [id, getMovie]
  );

  useEffect(function () {
    const fetchLoad = () => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 3000);
    };
    fetchLoad();
  }, []);

  return (
    <div className="movie-container">
      <div className="movies-nav">
        <h1>🍿FlexMovix</h1>
      </div>
      <div className="single-movie">
        <div>
          {load ? (
            <Spinner />
          ) : (
            <>
              <div className="single-movie-header">
                <button onClick={() => navigate(-1)}>
                  Go back <KeyboardReturnOutlinedIcon />
                </button>
              </div>

              <div className="movies">
                <img src={poster} alt={title} />
                <div className="m-details">
                  <h3>{title}</h3>
                  <p>
                    <span className="m-hd">HD</span>
                    <span className="m-pg">PG-13</span>
                    <span>
                      {year} {runtime}
                    </span>
                  </p>
                  <em>{plot}</em>
                  <ul>
                    <li className="m-list">
                      <small>Country:</small>
                      <small>Genre:</small>
                      <small>Year:</small>
                      <small>Director</small>
                      <small>Actors</small>
                      <small>Tags:</small>
                    </li>
                    <li>
                      <small>{country}</small>
                      <small>{genre}</small>
                      <small>{year}</small>
                      <small>{directors}</small>
                      <small>{actors}</small>
                      <small>{lang}</small>
                    </li>
                  </ul>

                  <div onClick={() => setIsAdded((isAdded) => !isAdded)}>
                    {isAdded ? (
                      <p>
                        The movie "{title}" has been added to your watchlist!
                      </p>
                    ) : (
                      <button onClick={() => handleAddWatchList(currentMovie)}>
                        add to movie
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
