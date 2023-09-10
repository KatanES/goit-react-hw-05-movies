import { getReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcDisclaimer } from 'react-icons/fc';

import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getReviews(movieId);
        console.log(result);
        setReviews(result);
      } catch (error) {
        toast.error('Reviews is not found!', {
          icon: '🤯',
        });
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <div>
        <h2>Movie Reviews</h2>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
      {reviews.length === 0 && (
        <p>
          <FcDisclaimer /> We don't have any reviews for this movie.
        </p>
      )}
    </>
  );
};

export default Reviews;
