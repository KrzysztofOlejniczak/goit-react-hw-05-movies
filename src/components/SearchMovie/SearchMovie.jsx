import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/api';

export const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const query = searchParams.get('query');

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    e.target.reset();
  };

  const handleSearchMovie = async query => {
    const movieList = await searchMovie(query);
    setList(movieList.data.results);
  };

  useEffect(() => {
    if (!query) return;
    handleSearchMovie(query);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" name="Search"></input>
        <button type="submit">Search</button>
      </form>
      <MovieList list={list} />
    </>
  );
};
