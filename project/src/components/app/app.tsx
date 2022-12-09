import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import RoomPage from '../../pages/room/room';
import NotFoundPage from '../../pages/not-found/not-found';
import {Review} from '../../types/reviews-type';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getAuthCheckedStatus} from '../../store/authorization-action//selectors';
import {getOffers, getOffersDataLoadingStatus} from '../../store/offers-data/selectors';

type AppOfferProps = {
  reviews: Review[];
}

function App({reviews}: AppOfferProps): JSX.Element{
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const offers = useAppSelector(getOffers);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  if (isOffersDataLoading || !isAuthChecked) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage reviews={reviews} offers={offers} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
