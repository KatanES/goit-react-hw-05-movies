import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'api';
import { MovieDetailsComponent } from 'components/MovieDetails/MovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieData(data);
      } catch (error) {
        console.error('Fail to get data about the movie');
      }
    };
    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return <MovieDetailsComponent movieData={movieData} />;
};

export default MovieDetails;
