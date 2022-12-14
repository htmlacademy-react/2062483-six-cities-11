import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import RoomPage from '../../pages/room/room';
import NotFoundPage from '../../pages/not-found/not-found';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {getAuthCheckedStatus} from '../../store/authorization/selectors';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner';

function App(): JSX.Element{
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  if (!isAuthChecked) {
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
            <PrivateRoute >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage />}
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
