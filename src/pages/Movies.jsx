import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchMovies } from 'api';
import { MovieCard } from 'components/Movies/MovieCard';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setMovieList([]);
    setPage(1);
  };

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
          alert('No movies found!');
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Переміщено в finally
      }
    };

    if (query && page) {
      loadResult();
    }
  }, [query, page]);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      alert('Enter movie name');
      return;
    }
    changeQuery(evt.target.elements.query.value);
    evt.target.reset();
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <MovieCard movieList={movieList} />
    </div>
  );
};

export default Movies;
