import { NavLink } from 'react-router-dom';
import {
  SearchMovieList,
  SearchMovieItem,
  SearchPoster,
  SearchPageContainer,
  SearchPageTitle,
} from './MovieCard.styled';
const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

export const MovieCard = ({ movieList }) => {
  return (
    <SearchPageContainer>
      <SearchPageTitle>Search results</SearchPageTitle>
      <SearchMovieList>
        {movieList.map(movie => (
          <SearchMovieItem key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>
              <SearchPoster
                src={imgBaseUrl + movie.poster_path}
                width={140}
                alt={movie.original_title}
              />
              {movie.original_title || movie.name}
            </NavLink>
          </SearchMovieItem>
        ))}
      </SearchMovieList>
    </SearchPageContainer>
  );
};
