import { useOutletContext } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useOutletContext();
  return (
    <>
      <p>Reviews for {movieId}</p>
    </>
  );
};
