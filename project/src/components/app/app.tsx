import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import RoomPage from '../../pages/room/room';
import NotFoundPage from '../../pages/not-found/not-found';
import {Review} from '../../types/reviews-type';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner';

type AppOfferProps = {
  reviews: Review[];
}

function App({reviews}: AppOfferProps): JSX.Element{
  const offers = useAppSelector((state) => state.offers);

  const isOffersDataLoading = useAppSelector((state) => state.isOffersLoaded);

  if (!isOffersDataLoading) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage offers={offers} />
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
    </BrowserRouter>
  );
}

export default App;
