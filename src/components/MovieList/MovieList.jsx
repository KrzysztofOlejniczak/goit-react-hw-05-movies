import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/api';

export const MovieList = () => {
  const [trendingList, setTrendingList] = useState([]);

  const getTrendingList = async () => {
    const movies = await getTrending();
    setTrendingList(movies.data.results);
  };

  useEffect(() => {
    getTrendingList();
  }, []);
  return (
    <>
      <h2>Trending today:</h2>
      <ul>
        {trendingList.map(el => {
          return <TrendingItem key={el.id} id={el.id} title={el.title} />;
        })}
      </ul>
    </>
  );
};
