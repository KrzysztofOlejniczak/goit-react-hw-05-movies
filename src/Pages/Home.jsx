import { MovieList } from 'components/MovieList/MovieList';
import { getTrending } from 'services/api';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
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
      <h2 className={styles.heading}>Trending today:</h2>
      <MovieList list={trendingList} />
    </>
  );
};

export default Home;
