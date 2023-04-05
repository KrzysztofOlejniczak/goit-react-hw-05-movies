import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: block;
  margin-right: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: rgb(23, 156, 68);

  &.active,
  &:hover,
  &:focus {
    background-color: rgb(156, 23, 52);
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <StyledLink className={styles.navLink} to="/">
            Home
          </StyledLink>
          <StyledLink className={styles.navLink} to="/movies">
            Movies
          </StyledLink>
        </nav>
      </div>
      <div className={styles.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
