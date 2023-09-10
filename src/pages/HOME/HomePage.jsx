import { useState, useEffect } from 'react';
import { getTrendingList } from 'API/api';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const response = await getTrendingList(
          '/trending/all/day?language=en-US'
        );
        setTrendingMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchMoviesList();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomePage;
