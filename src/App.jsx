import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./assets/pages/LandingPage";
import SearchMovies from "./components/SearchMovies";
import Movies from "./components/Movies";
import WatchList from "./assets/pages/WatchList";
import HomeMovies from "./assets/pages/HomeMovies";
import { MoviesProvider } from "./context/ContextMovie";
import PageNotFound from "./assets/pages/PageNotFound";

function App() {
  return (
    <MoviesProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomeMovies />} />
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/watch" element={<WatchList />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;
