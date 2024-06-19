import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
function App() {
  return (
    <Routes>
      <Route path="" element={<Layout></Layout>}>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
        <Route
          path="movie/:id"
          element={<MovieDetailPage></MovieDetailPage>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
