import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HOME/HomePage';
import Movies from 'pages/MOVIES/Movies';
import MovieDetails from 'pages/DETAILS/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Layout from '../components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} exact>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};
