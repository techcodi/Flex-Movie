import TrendingMovies from "../../components/TrendingMovies";
import TodayMovies from "../../components/TodayMovies";
import { NavLink } from "react-router-dom";
import "./HomeMovies.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Spinner from "../../components/Spinner";
import { useState } from "react";
import { useEffect } from "react";
function HomeMovies() {
  const [loading, setIsLoading] = useState();

  useEffect(function () {
    const loadData = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    loadData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="home-spinner">
          <Spinner />
        </div>
      ) : (
        <div className="m-home">
          <div className="m-home-nav">
            <h1>🍿FlexMovix</h1>
            <ul className="m-nav">
              <li>
                <NavLink to="/home">
                  {" "}
                  <HomeRoundedIcon /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies">
                  {" "}
                  <SearchIcon /> Search
                </NavLink>
              </li>
              <li>
                <NavLink to="/watch">
                  {" "}
                  <BookmarkIcon /> Watch list
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="home-t-t">
            <TodayMovies />
            <TrendingMovies />
          </div>
        </div>
      )}
    </>
  );
}

export default HomeMovies;
