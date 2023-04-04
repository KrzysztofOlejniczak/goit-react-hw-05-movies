import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export const Reviews = () => {
  const { movieId } = useOutletContext();
  const [reviews, setReviews] = useState([]);
  const getReview = async id => {
    const answer = await getMovieReviews(id);
    setReviews(answer.data.results);
  };

  useEffect(() => {
    getReview(movieId);
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 ? (
        <p>There is no review for this movie</p>
      ) : (
        <ReviewsList reviews={reviews} movieId={movieId} />
      )}
    </>
  );
};
