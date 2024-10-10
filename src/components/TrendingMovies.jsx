import { getMoviesProp } from "../context/ContextMovie";
import "./TrendingMovies.css";
import Swal from "sweetalert2";

//import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.css";
function TrendingMovies() {
  const { trendingMovies } = getMoviesProp();

  function handleAlert() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This movie source is not available for now!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }

  return (
    <div>
      <div className="trending">
        <h2> Top movies</h2>

        <ul>
          {trendingMovies.map((trending) => (
            <li key={trending.id} onClick={handleAlert}>
              <div className="trending-div">
                <img
                  src={`https://image.tmdb.org/t/p/w500${trending.poster_path}`}
                  alt={trending.title || trending.name}
                  style={{ width: "100%" }}
                />
                <h3>{trending.title || trending.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrendingMovies;
