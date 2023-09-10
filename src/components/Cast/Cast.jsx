import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcDisclaimer } from 'react-icons/fc';
import { getCast } from 'API/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await getCast(movieId);
        console.log(response);
        setCast(response.cast);
      } catch (error) {
        toast.error('Request is not found!', {
          icon: '🤯',
        });
        console.log(error);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <>
      <div>
        <h2>Movie Cast</h2>
        <ul>
          {cast.length > 0 &&
            cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `https://placehold.jp/24/cccccc/ffffff/140x210.png?text=There is no photo`
                  }
                  width={140}
                  loading="lazy"
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))}
        </ul>
      </div>
      {cast.length === 0 && (
        <p>
          <FcDisclaimer /> We don't have any cast for this movie.
        </p>
      )}
    </>
  );
};

export default Cast;
