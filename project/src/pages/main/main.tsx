import CardList from '../../components/card-list/card-list';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import Tabs from '../../components/tabs/tabs';
import SortForm from '../../components/sort-form/sort-form';
import {Offer} from '../../types/offers-type';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps): JSX.Element {
  return (
    <Layout className={['page--gray', 'page--main']}>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortForm />
              <CardList offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" />
            </div>
          </div>
        </div>
      </main>

    </Layout>
  );
}

export default MainPage;
