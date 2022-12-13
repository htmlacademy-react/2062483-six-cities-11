import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/reviews-type';
import {MAX_REVIEW_COUNT} from '../../constants';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.slice(0, MAX_REVIEW_COUNT).map((reviewItem) => (
        <ReviewItem
          review={reviewItem}
          key={reviewItem.id}
        />
      ))}
    </ul>

  );
}
export default ReviewList;
