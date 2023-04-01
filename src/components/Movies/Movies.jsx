import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from 'services/api';

export const Movies = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [poster, setPoster] = useState('');
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  const getMovieDetail = async id => {
    const movie = await getMovieInfo(id);
    // console.log(movie.data);
    setTitle(movie.data.title);
    setYear(new Date(movie.data.release_date).getFullYear().toString());
    setScore(movie.data.vote_average);
    setOverview(movie.data.overview);
    setPoster(`https://image.tmdb.org/t/p/w500${movie.data.poster_path}`);

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
      <img src={poster} alt={`${title} poster`} />
      <div>
        <h1>
          {title} {year.length > 0 && `(${year})`}
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
