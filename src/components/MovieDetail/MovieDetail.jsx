import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './MovieDetail.module.css';
import PropTypes from 'prop-types';

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
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <img className={styles.poster} src={poster} alt={`${title} poster`} />
        <div className={styles.info}>
          <h1>
            {title} {year && `(${year})`}
          </h1>
          <p>User score: {Math.round(score * 10)}%</p>
          <h2>Overview:</h2>
          <p>{overview}</p>
          <h2>Genres:</h2>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <h3>Additional information:</h3>
        <ul className={styles.subNav}>
          <li>
            <Link className={styles.subNavLink} to={`cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={styles.subNavLink} to={`reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet context={{ movieId }} />
        </Suspense>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};
