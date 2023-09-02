import { MovieCard } from 'components/Movies/MovieCard';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'api';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovies('day', page);
        if (movies.length > 0) {
          setMovies(prevMovies =>
            page > 1 ? [...prevMovies, ...movieData] : movieData
          );
          // success(query);
        } else {
          alert('Фільми не знайдено!');
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (query && page) {
      fetchData();
    }
  }, [query, page]);

  return (
    <div>
      <h2>Main page</h2>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default HomePage;
