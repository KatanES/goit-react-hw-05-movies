import { getReviews } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcDisclaimer } from 'react-icons/fc';
import {
  ReviewsPageContainer,
  ReviewsPageTitle,
  ReviewsList,
} from './Reviews.styled';

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
      <ReviewsPageContainer>
        <ReviewsPageTitle>Movie Reviews</ReviewsPageTitle>
        <ReviewsList>
          {reviews.map(review => (
            <p key={review.id}>
              <strong>{review.author}:</strong> {review.content}
            </p>
          ))}
        </ReviewsList>
      </ReviewsPageContainer>
      {reviews.length === 0 && (
        <p className="no-reviews">
          <FcDisclaimer /> Sorry, We don't have any reviews
        </p>
      )}
    </>
  );
};

export default Reviews;
