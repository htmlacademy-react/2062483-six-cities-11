import {useEffect} from 'react';
import Layout from '../../components/layout/layout';
import CityTabs from '../../components/cities-tabs/cities-tabs';
import {CITIES} from '../../constants';
import {getOffersByCity} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import CitiesWithOffers from '../../components/cities-with-offers/cities-with-offers';
import CitiesEmptyOffers from '../../components/cities-empty/cities-empty';
import {getCurrentCity} from '../../store/app/selectors';
import {getOffers, getOffersStatus} from '../../store/offers/selectors';
import {getAuthCheckedStatus} from '../../store/authorization/selectors';
import {checkAuthAction, fetchOffers} from '../../store/api-actions';
import FullPageError from '../../pages/full-page-error/full-page-error';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const offersByCity = getOffersByCity(currentCity, offers);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const offersStatus = useAppSelector(getOffersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers);
    dispatch(checkAuthAction);
  }, [dispatch]);

  if (offersStatus.isLoading || !isAuthChecked) {
    return (
      <LoadingSpinner />
    );
  }

  if (offersStatus.isFailed) {
    return (
      <FullPageError />
    );
  }

  return (
    <Layout className={['page--gray', 'page--main', `${offersByCity.length ? '' : 'page__main--index-empty'}`]}>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs cities={CITIES} activeCity={currentCity} />
        <div className="cities">
          {offersByCity.length ? <CitiesWithOffers offersByCity={offersByCity} currentCity={currentCity} /> : <CitiesEmptyOffers />}
        </div>
      </main>

    </Layout>
  );
}

export default MainPage;
