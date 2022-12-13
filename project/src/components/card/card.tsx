import cn from 'classnames';
import {Offer} from '../../types/offers-type';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {
  MAX_RATING,
  cardImageSize,
  AppRoute
} from '../../constants';
import {
  getWordCapitalized,
  getRatingInPercent
} from '../../utils';
import {Link, generatePath} from 'react-router-dom';

type CardProps = {
  offer: Offer;
  cardType: 'favorites' | 'cities' | 'near';
  onCardMouseEnter?: (offerId: number | null) => void;
}

function Card({offer, cardType, onCardMouseEnter}: CardProps): JSX.Element {
  const {title, type, previewImage, price, rating, isPremium, isFavorite, id} = offer;
  const {width, height, className} = cardImageSize[cardType];

  const infoClassName = cn(cardType === 'favorites' ? 'favorites__card-info' : 'place-card__info');

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onCardMouseEnter?.(offer.id)}
      onMouseLeave={() => onCardMouseEnter?.(null)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${generatePath(AppRoute.Room, {id: String(id)})}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place"
          />
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton className={cn(isFavorite && 'place-card__bookmark-button--active')} type='main' isFavorite={isFavorite} id={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingInPercent(Math.round(rating), MAX_RATING)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${generatePath(AppRoute.Room, {id: String(id)})}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{getWordCapitalized(type)}</p>
      </div>
    </article>
  );
}

export default Card;

