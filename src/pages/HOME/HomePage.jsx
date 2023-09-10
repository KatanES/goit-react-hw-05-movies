import { useState, useEffect } from 'react';
import { getTrendingList } from 'API/api';
import { useLocation } from 'react-router-dom';
import TrendingMovies from 'components/Trending movies/TrendingMovies';
import { HomePageContainer, HomePageTitle } from './HomePage.styled';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const location = useLocation();

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
    <HomePageContainer>
      <HomePageTitle>Trending today</HomePageTitle>

      <TrendingMovies films={trendingMovies} />
    </HomePageContainer>
  );
};

export default HomePage;
