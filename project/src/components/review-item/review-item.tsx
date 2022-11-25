import {Review} from '../../types/reviews-type';
import {MAX_RATING} from '../../constants';
import {
  getRatingInPercent,
  getFormatDateInComments,
  getFormatDateInTag
} from '../../utils';


type ReviewItemProps = {
  review: Review;
}

function ReviewItem({review}: ReviewItemProps): JSX.Element {
  const {user, id, comment, rating, date} = review;

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingInPercent(rating, MAX_RATING)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getFormatDateInTag(date)}>{getFormatDateInComments(date)}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
