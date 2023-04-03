export const ReviewsList = ({ reviews, movieId }) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={`${movieId}r${index + 1}`}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
