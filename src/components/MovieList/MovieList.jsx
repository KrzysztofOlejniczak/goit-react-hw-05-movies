import { ListItem } from 'components/ListItem/ListItem';

export const MovieList = ({ list }) => {
  return (
    <>
      <ul>
        {list.map(el => {
          return <ListItem key={el.id} id={el.id} title={el.title} />;
        })}
      </ul>
    </>
  );
};
