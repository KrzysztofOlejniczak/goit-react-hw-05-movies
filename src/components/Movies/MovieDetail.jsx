import { Link, Outlet } from 'react-router-dom';

export const MovieDetail = ({
  title,
  poster,
  year,
  score,
  overview,
  genres,
  movieId,
}) => {
  return (
    <>
      <img src={poster} alt={`${title} poster`} />
      <div>
        <h1>
          {title} {year && `(${year})`}
        </h1>
        <p>User score: {Math.round(score * 10)}%</p>
        <h2>Overview:</h2>
        <p>{overview}</p>
        <h2>Genres:</h2>
        <p>{genres}</p>
      </div>
      <div>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet context={{ movieId }} />
      </div>
    </>
  );
};
