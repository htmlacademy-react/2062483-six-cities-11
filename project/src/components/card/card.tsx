import {MAX_RATING} from '../../constants';
import {Offer} from '../../types/offers-type';
import {
  getWordCapitalized,
  getRatingInPercent
} from '../../utils';

type CardProps = {
  offer: Offer;
  onCardMouseEnter: (offerId: number | null) => void;
}

function Card({offer, onCardMouseEnter} : CardProps) : JSX.Element {
  const {title, type, previewImage, price, rating, isPremium, isFavorite} = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onCardMouseEnter(offer.id)}
      onMouseLeave={() => onCardMouseEnter(null)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`
            place-card__bookmark-button
            button
            ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingInPercent(rating, MAX_RATING)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{getWordCapitalized(type)}</p>
      </div>
    </article>
  );
}

export default Card;
