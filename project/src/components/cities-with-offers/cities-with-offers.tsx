import {useState} from 'react';
import CardList from '../../components/card-list/card-list';
import Map from '../../components/map/map';
import SortForm from '../../components/sort-form/sort-form';
import {Offer} from '../../types/offers-type';
import {getSortOffers} from '../../utils';
import {useAppSelector} from '../../hooks';
import {getCurrentSortType} from '../../store/app/selectors';

type CitiesWithOffersProps = {
  offersByCity: Offer[];
  currentCity: string;
}

function CitiesWithOffers({offersByCity, currentCity}: CitiesWithOffersProps): JSX.Element{
  const currentSortType = useAppSelector(getCurrentSortType);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
        <SortForm />
        <CardList cardListType='cities' offers={getSortOffers(currentSortType, offersByCity)} onCardMouseEnter={setActiveCard} />
      </section>
      <div className="cities__right-section">
        <Map className="cities__map" offers={offersByCity} city={offersByCity[0].city.location} selectedOffer={activeCard} />
      </div>
    </div>
  );
}

export default CitiesWithOffers;
