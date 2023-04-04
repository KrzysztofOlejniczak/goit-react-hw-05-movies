import styles from './ReviewsList.module.css';

export const ReviewsList = ({ reviews, movieId }) => {
  return (
    <ul className={styles.list}>
      {reviews.map((review, index) => (
        <li className={styles.item} key={`${movieId}r${index + 1}`}>
          <h4 className={styles.author}>{review.author}</h4>
          <p className={styles.review}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
