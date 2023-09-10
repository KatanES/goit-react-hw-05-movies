import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchMovies } from 'API/api';
import { MovieCard } from 'components/Movies/MovieCard';
import { MoviePage } from './Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadResult = async () => {
      try {
        setLoading(true);
        const movie = await fetchMovies(query, page);
        if (movie && movie.length) {
          setMovieList(prevMovies =>
            page > 1 ? [...prevMovies, ...movie] : movie
          );

          setLoading(false);
        } else {
          alert('Movies are not found!');
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (query && page) {
      loadResult();
    }
  }, [query, page]);

  const handleSubmit = newQuery => {
    if (!newQuery) {
      alert('Enter movie name');
      return;
    }
    setQuery(newQuery);
    setPage(1);
  };

  return (
    <MoviePage>
      <SearchBar handleSubmit={handleSubmit} />
      <MovieCard movieList={movieList} />
      {loading && <Loader />}
    </MoviePage>
  );
};

export default Movies;
