import {ChangeEvent, useState, FormEvent, useEffect} from 'react';
import Rating from '../rating/rating';
import {RATING} from '../../constants';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postComment} from '../../store/api-actions';
import {getPostReviewStatus} from '../../store/comments/selectors';

function ReviewForm(): JSX.Element{
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const postStatus = useAppSelector(getPostReviewStatus);

  const [reviewData, setReviewData] = useState({
    rating: '',
    review: '',
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setReviewData({...reviewData, [name]: value});
  };

  const resetReviewForm = () => setReviewData({rating: '', review: ''});

  useEffect(() => {
    postStatus.isSuccess && resetReviewForm();
  }, [postStatus.isSuccess]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    id && dispatch(postComment(({
      id: +id,
      rating: +reviewData.rating,
      comment: reviewData.review,
    })));
  };

  const isValidComment = (currentReview: string): boolean => currentReview.length >= 50 && currentReview.length < 300;
  const isDisabled = (currentRating: string, currentReview: string): boolean => !(currentRating && isValidComment(currentReview));

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((rating) => (
          <Rating
            key={rating.value}
            handleRatingChange={handleChange}
            rating={rating.value}
            value={reviewData.rating}
            title={rating.title}
            disabled={postStatus.isLoading}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
        disabled={postStatus.isLoading}
        value={reviewData.review}
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
          disabled={isDisabled(reviewData.rating, reviewData.review) || postStatus.isLoading}
        >
          {postStatus.isLoading ? 'Loaging...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
