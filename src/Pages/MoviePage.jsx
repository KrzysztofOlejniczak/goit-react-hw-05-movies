import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/api';
import posterPlaceholder from '../img/poster-placeholder.png';
import { MovieDetail } from '../components/MovieDetail/MovieDetail';
import styles from './MoviePage.module.css';
import { Spinner } from 'components/Spinner/Spinner';

const MoviePage = () => {
  const location = useLocation();

  const [backLocation, setBackLocation] = useState('/');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(null);
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState(
    `This movie doesn't have a plot outline yet.`
  );
  const [poster, setPoster] = useState(posterPlaceholder);
  const [genres, setGenres] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  const getMovieDetail = async id => {
    setIsLoading(true);
    const movie = await getMovieInfo(id);
    setTitle(movie.data.title);
    if (movie.data.release_date !== '') {
      setYear(new Date(movie.data.release_date).getFullYear().toString());
    }
    setScore(movie.data.vote_average);
    if (movie.data.overview !== '') {
      setOverview(movie.data.overview);
    }
    if (movie.data.poster_path) {
      setPoster(`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`);
    }

    let movieGenre = [];
    movie.data.genres.map(genre => {
      movieGenre = [...movieGenre, genre.name];
      return setGenres(movieGenre.join(' '));
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieDetail(movieId);
  }, [movieId]);

  useEffect(() => {
    setBackLocation(location.state?.from ?? '/');
    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.container}>
      <Link to={backLocation}>
        <button className={styles.btn} type="button">
          Go back
        </button>
      </Link>
      <MovieDetail
        title={title}
        poster={poster}
        year={year}
        score={score}
        overview={overview}
        genres={genres}
        movieId={movieId}
      />
      {isLoading && <Spinner />}
    </div>
  );
};

export default MoviePage;
