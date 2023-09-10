// import { HiMenuAlt3 } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MovieList, MovieItem, Poster } from './TrendingMovies.styled';
const TrendingMovies = ({ films }) => {
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <MovieList>
      {films.map(movie => {
        return (
          <MovieItem key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <Poster
                src={imgBaseUrl + movie.poster_path}
                width={140}
                alt={movie.original_title}
              />
              <h3>{movie.original_title}</h3>
            </NavLink>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default TrendingMovies;
