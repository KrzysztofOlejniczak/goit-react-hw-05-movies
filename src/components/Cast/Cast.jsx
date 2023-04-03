import placeholder from './placeholder.png';

export const Cast = ({ cast, movieId }) => {
  return (
    <ul>
      {cast.map((el, index) => (
        <li key={`${movieId}r${index + 1}`}>
          {el.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={`${el.name}`}
              width={150}
            />
          ) : (
            <img src={placeholder} alt={`${el.name}`} width={150} />
          )}
          <h4>{el.name}</h4>
          <p>{el.character}</p>
        </li>
      ))}
    </ul>
  );
};
