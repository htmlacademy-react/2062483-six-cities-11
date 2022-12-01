import CardList from '../../components/card-list/card-list';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import CityTabs from '../../components/cities-tabs/cities-tabs';
import SortForm from '../../components/sort-form/sort-form';
import {Offer} from '../../types/offers-type';
import {CITIES} from '../../constants';
import {getOffersByCity} from '../../utils';
import {useAppSelector} from '../../hooks';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offersCount = getOffersByCity(currentCity, offers).length;

  return (
    <Layout className={['page--gray', 'page--main']}>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs cities={CITIES} activeCity={currentCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in {currentCity}</b>
              <SortForm />
              <CardList cardListType='cities' offers={getOffersByCity(currentCity, offers)} />
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" offers={offers} city={offers[0].city.location} />
            </div>
          </div>
        </div>
      </main>

    </Layout>
  );
}

export default MainPage;
