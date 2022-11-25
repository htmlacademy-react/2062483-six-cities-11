import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/reviews-type';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((reviewItem) => (
        <ReviewItem
          review={reviewItem}
          key={reviewItem.id}
        />
      ))}
    </ul>

  );
}
export default ReviewList;
