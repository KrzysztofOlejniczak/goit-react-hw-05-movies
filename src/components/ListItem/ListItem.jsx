import { Link } from 'react-router-dom';

export const ListItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};
