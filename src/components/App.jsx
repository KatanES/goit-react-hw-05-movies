import { Routes, Route } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';

import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import Reviews from 'pages/Reviews';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Container>
  );
};
