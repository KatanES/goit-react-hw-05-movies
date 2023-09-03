import { MovieCard } from 'components/Movies/MovieCard';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'api';

const HomePage = () => {
  const [query] = useState('');
  const [movies, setMovies] = useState([]);
  const [page] = useState(1);

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
          alert('Movies are not found!');
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (query && page) {
      fetchData();
    }
  }, [query, page, movies]);

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
