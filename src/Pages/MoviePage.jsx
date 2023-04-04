import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/api';
import posterPlaceholder from '../img/poster-placeholder.png';
import { MovieDetail } from '../components/Movies/MovieDetail';

export const MoviePage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [poster, setPoster] = useState(posterPlaceholder);
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  const getMovieDetail = async id => {
    const movie = await getMovieInfo(id);
    // console.log(movie.data);
    setTitle(movie.data.title);
    setYear(new Date(movie.data.release_date).getFullYear().toString());
    setScore(movie.data.vote_average);
    setOverview(movie.data.overview);
    if (movie.data.poster_path) {
      setPoster(`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`);
    }

    let movieGenre = [];
    movie.data.genres.map(genre => {
      movieGenre = [...movieGenre, genre.name];
      return setGenres(movieGenre.join(' '));
    });
  };

  useEffect(() => {
    getMovieDetail(movieId);
  }, [movieId]);
  return (
    <>
      <Link to={backLinkHref}>
        <button type="button">Go back</button>
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
    </>
  );
};
