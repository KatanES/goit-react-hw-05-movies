import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'api';

const MovieDetails = () => {
  const { movie_id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovieById(movie_id);
        setMovieData(data);
      } catch (error) {
        console.error('Fail to get data about the movie');
      }
    };
    fetchMovieData();
  }, [movie_id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieData.original_title || movieData.name}</h2>
      <p>Description: {movieData.overview}</p>
      <p>Rate: {movieData.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
