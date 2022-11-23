import {Offer} from '../../types/offers-type';
import Card from '../card/card';

type FavoritesListProps = {
  offers: Offer[];
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);


  const offersByLocation = favoriteOffers.reduce<Record<string, Offer[]>>((cityOffers, currentOffer) => {
    if (!cityOffers[currentOffer.city.name]) {
      cityOffers[currentOffer.city.name] = [];
    }
    cityOffers[currentOffer.city.name].push(currentOffer);

    return cityOffers;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(offersByLocation).map(([city, cityOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) =>
              offer.city.name === city
              &&
              <Card
                offer={offer}
                cardType={'favorites'}
                key={offer.id}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
