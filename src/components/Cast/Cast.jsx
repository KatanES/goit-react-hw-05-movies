import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcDisclaimer } from 'react-icons/fc';
import { getCast } from 'API/api';
import {
  CastList,
  CastItem,
  CastPoster,
  CastPageContainer,
  CastDescription,
} from './Cast.styled';

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
    <CastPageContainer>
      <h2>Movie Cast</h2>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <CastPoster
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : `https://placehold.jp/24/cccccc/ffffff/140x210.png?text=There is no photo`
                }
                width={140}
                loading="lazy"
                alt={actor.original_name}
              />
              <CastDescription>
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </CastDescription>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>
          <FcDisclaimer /> Ми не маємо жодних акторів для цього фільму.
        </p>
      )}
    </CastPageContainer>
  );
};

export default Cast;
