import placeholder from '../../img/placeholder.png';
import styles from './Cast.module.css';

export const Cast = ({ cast, movieId }) => {
  return (
    <ul className={styles.list}>
      {cast.map((el, index) => (
        <li className={styles.box} key={`${movieId}r${index + 1}`}>
          {el.profile_path ? (
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={`${el.name}`}
              width={150}
            />
          ) : (
            <img
              className={styles.img}
              src={placeholder}
              alt={`${el.name}`}
              width={150}
            />
          )}
          <h4 className={styles.name}>{el.name}</h4>
          <p className={styles.role}>{el.character}</p>
        </li>
      ))}
    </ul>
  );
};
