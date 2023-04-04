import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { MoviePage } from '../Pages/MoviePage';
import { Reviews } from '../Pages/Reviews';
import { Credits } from '../Pages/Credits';
import { SearchMovie } from './SearchMovie/SearchMovie';
import { SharedLayout } from '../Pages/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<SearchMovie />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
