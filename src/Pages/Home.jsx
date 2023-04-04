import { MovieList } from 'components/MovieList/MovieList';
import { getTrending } from 'services/api';
import { useEffect, useState } from 'react';

export const Home = () => {
  const getTrendingList = async () => {
    const movies = await getTrending();
    setTrendingList(movies.data.results);
  };

  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    getTrendingList();
  }, []);

  return (
    <>
      <h2>Trending today:</h2>
      <MovieList list={trendingList} />
    </>
  );
};
