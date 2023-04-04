import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from '../Pages/SharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const SearchMovie = lazy(() => import('../Pages/SearchMovie'));
const MoviePage = lazy(() => import('../Pages/MoviePage'));
const Credits = lazy(() => import('../Pages/Credits'));
const Reviews = lazy(() => import('../Pages/Reviews'));

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
