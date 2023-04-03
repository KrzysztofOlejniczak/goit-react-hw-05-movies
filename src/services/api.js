import axios from 'axios';

const API_KEY = '73116bd12aca11956e7ad9f337771b5c';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const getTrending = async () => {
  const response = axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response;
};

const getMovieInfo = async id => {
  const response = axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response;
};

const getMovieReviews = async (id, page = 1) => {
  const response = axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response;
};

const getMovieCredits = async (id, page = 1) => {
  const response = axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export { getTrending, getMovieInfo, getMovieReviews, getMovieCredits };
