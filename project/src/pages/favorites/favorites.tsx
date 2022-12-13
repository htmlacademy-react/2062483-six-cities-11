import FavoritesList from '../../components/favorites-list/favorites-list';
import Layout from '../../components/layout/layout';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks/index';
import {getFavoritesOffers, getFavoritesDataLoadedStatus} from '../../store/favorites/selectors';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoritesOffers);
  const isFavoritesOffersDataLoading = useAppSelector(getFavoritesDataLoadedStatus);

  if (isFavoritesOffersDataLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <Layout className={[]}>
      {favoriteOffers.length === 0 ? <FavoritesEmpty /> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              {favoriteOffers.length ? <FavoritesList offers={favoriteOffers}/> : <FavoritesEmpty />}
            </section>
          </div>
        </main>}
      <Footer />

    </Layout>
  );
}

export default FavoritesPage;
