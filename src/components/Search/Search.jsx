import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    console.log();
  };

  useEffect(() => {
    console.log(searchParams.get('query'));
  }, [searchParams]);
  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="Search"></input>
      <button type="submit">Search</button>
    </form>
  );
};
