import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import {Offer} from '../../types/offers-type';

type CitiesWithOffersProps = {
  offersByCity: Offer[];
  currentCity: string;
}

function CitiesWithOffers({offersByCity, currentCity}: CitiesWithOffersProps): JSX.Element{

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
        <SortForm />
        <CardList cardListType='cities' offers={offersByCity} />
      </section>
      <div className="cities__right-section">
        <Map className="cities__map" offers={offersByCity} city={offersByCity[0].city.location} />
      </div>
    </div>
  );
}

export default CitiesWithOffers;
