import {useAppSelector} from '../../hooks';
import {getUserInfo} from '../../store/authorization/selectors';
import {Review} from '../../types/reviews-type';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  const user = useAppSelector(getUserInfo);

  return (
    <section className="property__reviews reviews">
      {reviews.length ?
        <h2 className="reviews__title">Reviews &middot;
          <span className="reviews__amount">{reviews.length}</span>
        </h2>
        :
        <h2 className="reviews__title">
          {user && 'No reviews yet. Be the first to review the hotel'}
        </h2>}
      <ReviewList reviews={reviews} />
      {user && <ReviewForm />}
    </section>);
}
export default Reviews;
