import { getMoviesProp } from "../../context/ContextMovie";
import "./WatchList.css";
import "./HomeMovies.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import { NavLink, useNavigate } from "react-router-dom";
function WatchList() {
  const { watchMovie, handleRemove } = getMoviesProp();
  const navigate = useNavigate();
  return (
    <div className="watch-section">
      <div className="movies-nav">
        <h1>🍿FlexMovix</h1>
      </div>
      <div className="w-container">
        <div>
          <h2>Movies added to watch list</h2>
          {watchMovie.length > 0 ? (
            <ul className="w-ul">
              {watchMovie.map((movie) => (
                <li key={movie.imdbID} className="w-li">
                  <img src={movie.Poster} alt={movie.Title} />
                  <button onClick={() => handleRemove(movie.imdbID)}>
                    {" "}
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your watch list is empty</p>
          )}

          <button style={{ marginTop: "2rem" }} onClick={() => navigate(-1)}>
            Go back <KeyboardReturnOutlinedIcon />
          </button>
        </div>
      </div>

      <div className="m-home-nav">
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

export default WatchList;
