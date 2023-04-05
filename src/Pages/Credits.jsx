import { Cast } from 'components/Cast/Cast';
import { Spinner } from 'components/Spinner/Spinner';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Credits = () => {
  const { movieId } = useOutletContext();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCredits = async id => {
    setIsLoading(true);
    const answer = await getMovieCredits(id);
    setCredits(answer.data.cast);
    setIsLoading(false);
  };

  useEffect(() => {
    getCredits(movieId);
  }, [movieId]);
  return (
    <>
      {credits.length === 0 ? (
        <p>There is no cast for this movie</p>
      ) : (
        <Cast cast={credits} movieId={movieId} />
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default Credits;
