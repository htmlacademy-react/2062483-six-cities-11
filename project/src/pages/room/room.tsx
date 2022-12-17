import cn from 'classnames';
import Map from '../../components/map/map';
import Layout from '../../components/layout/layout';
import CardList from '../../components/card-list/card-list';
import FullPageError from '../../pages/full-page-error/full-page-error';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import Reviews from '../../components/reviews/reviews';
import {COUNT_NEAR_PLACES, MAX_RATING, COUNT_PROPERTY_IMG} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getReviews} from '../../store/comments/selectors';
import {getCurrentOffer, getCurrentOfferStatus, getNearbyOffers} from '../../store/offers/selectors';
import {fetchCurrentOffer, fetchComments, fetchNearbyOffers} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {getWordCapitalized, getRatingInPercent} from '../../utils';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import {sortReviews} from '../../utils';

function RoomPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const reviews = useAppSelector(getReviews);
  const sortedReviews = reviews.slice().sort(sortReviews);
  const nearbyOffers = useAppSelector(getNearbyOffers).slice(0, COUNT_NEAR_PLACES);
  const currentOfferStatus = useAppSelector(getCurrentOfferStatus);
  const property = useAppSelector(getCurrentOffer);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [dispatch, id]);

  if (currentOfferStatus.isLoading || !property) {
    return (
      <LoadingSpinner />
    );
  }

  if (currentOfferStatus.isFailed) {
    return (
      <FullPageError />
    );
  }

  const {isPremium, title, rating, type, bedrooms, maxAdults, price, goods, city, images, host, description, isFavorite} = property;

  return (
    <Layout className={[]}>

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images={images.slice(0, COUNT_PROPERTY_IMG)} type={type} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <BookmarkButton className={cn('property__bookmark-button', isFavorite && 'place-card__bookmark-button--active')} type='property' isFavorite={isFavorite} id={id} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingInPercent(Math.round(rating), MAX_RATING)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getWordCapitalized(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                  <span className="property__user-status">
                    {host.isPro}
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={sortedReviews} />
            </div>
          </div>
          <Map className="property__map" offers={[...nearbyOffers, property]} city={city.location} selectedOffer={property.id} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList cardListType='near' offers={nearbyOffers.slice(0, COUNT_NEAR_PLACES)} />
          </section>
        </div>
      </main>

    </Layout>
  );
}

export default RoomPage;
