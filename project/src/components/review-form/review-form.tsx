import {ChangeEvent, useState} from 'react';
import Rating from '../rating/rating';
import {RATING} from '../../constants';

function ReviewForm(): JSX.Element{
  const [reviewData, setReviewData] = useState({
    rating: '',
    review: '',
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setReviewData({...reviewData, [name]: value});
  };

  const isDisabled = (currentRating: string, currentReview: string): boolean => !(currentRating && currentReview);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((rating) => (
          <Rating
            key={rating.value}
            handleRatingChange={handleChange}
            value={rating.value}
            title={rating.title}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set&nbsp;
          <span className="reviews__star">
          rating
          </span>
          &nbsp;and describe your stay with at least&nbsp;
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled(reviewData.rating, reviewData.review)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;