import { useState, useEffect, useLocation } from 'react';
import { Loader } from '../components/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchMovies } from 'api';
import { MovieCard } from 'components/Movies/MovieCard';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // const changeQuery = newQuery => {
  //   setQuery(`${Date.now()}/${newQuery}`);
  //   setMovieList([]);
  //   setPage(1);
  // };

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

  const handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.target.elements.query.value.trim();
    if (!newQuery) {
      alert('Enter movie name');
      return;
    }
    setQuery(newQuery);
    setPage(1);
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <MovieCard movieList={movieList} />
      {loading && <Loader />}
    </div>
  );
};

export default Movies;
