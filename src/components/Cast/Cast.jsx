import { useOutletContext } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useOutletContext();
  return (
    <>
      <p>Cast for {movieId}</p>
    </>
  );
};
