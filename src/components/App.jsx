import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { Reviews } from './Reviews/Reviews';
import { Credits } from './Credits/Credits';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<Movies />}>
          <Route path="cast" element={<Credits />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="/products" element={<Products />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
