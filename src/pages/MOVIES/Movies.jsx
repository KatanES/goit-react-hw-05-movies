import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchMovies } from 'API/api';
import { MovieCard } from 'components/Movies/MovieCard';
import { MoviePage } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const queryUpdate = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const loadResult = async () => {
      try {
        setLoading(true);
        const movies = await fetchMovies(movieName);
        setMovieList(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadResult();
  }, [movieName]);

  // const handleSubmit = newQuery => {
  //   if (!newQuery) {
  //     alert('Enter movie name');
  //     return;
  //   }
  //   setQuery(newQuery);
  //   setPage(1);
  //   navigate(`/movies?query=${newQuery}`);
  // };
  return (
    <MoviePage>
      <SearchBar value={movieName} onChange={queryUpdate} />
      <MovieCard movieList={movieList} />
      {loading && <Loader />}
    </MoviePage>
  );
};

export default Movies;
