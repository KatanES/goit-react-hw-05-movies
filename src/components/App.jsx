import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
// import NotFound from 'path/to/pages/NotFound';

const StyledLink = styled(NavLink)`
  color: black;
  display: flex;
  flex-direction: column;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  // const [loading, setLoading] = useState(false);

  // const handleLoadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
        </Route>

        <Route path="*" element={<div>Not found page</div>} />
      </Routes>

      <div>{/* <button onClick={handleLoadMore}>Load more</button> */}</div>
    </div>
  );
};
