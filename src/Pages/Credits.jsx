import { Cast } from 'components/Cast/Cast';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Credits = () => {
  const { movieId } = useOutletContext();
  const [credits, setCredits] = useState([]);
  const getCredits = async id => {
    const answer = await getMovieCredits(id);
    setCredits(answer.data.cast);
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
    </>
  );
};

export default Credits;
