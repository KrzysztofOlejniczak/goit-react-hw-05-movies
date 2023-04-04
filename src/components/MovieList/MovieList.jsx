import { ListItem } from 'components/ListItem/ListItem';
import styles from './MovieList.module.css';

export const MovieList = ({ list }) => {
  return (
    <>
      <ul className={styles.list}>
        {list.map(el => {
          return <ListItem key={el.id} id={el.id} title={el.title} />;
        })}
      </ul>
    </>
  );
};
