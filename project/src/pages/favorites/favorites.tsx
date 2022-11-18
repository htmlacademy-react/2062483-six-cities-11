import FavotitesList from '../../components/favorites-list/favorites-list';
import Layout from '../../components/layout/layout';
import Footer from '../../components/footer/footer';
import {Offer} from '../../types/offers-type';

type FavotitesPageProps = {
  offers: Offer[];
}

function FavotitesPage({offers} : FavotitesPageProps): JSX.Element {
  return (
    <Layout className={[]}>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavotitesList offers={offers} />
          </section>
        </div>
      </main>
      <Footer />

    </Layout>
  );
}

export default FavotitesPage;
