import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';
import {getUserInfo} from '../../store/authorization-action/selectors';
import {getFavoritesOffers} from '../../store/favorites-data/selectors';

function NavigationLogin(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserInfo);
  const favoriteOffers = useAppSelector(getFavoritesOffers);

  const handleClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={`${AppRoute.Favorites}`}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img src={user?.avatarUrl} alt="avatar" />
          </div>
          <span className="header__user-name user__name">{user?.email}</span>
          <span className="header__favorite-count">{favoriteOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={`${AppRoute.Login}`}
          onClick={handleClick}
        >
          <span className="header__signout">
            Sign out
          </span>
        </Link>
      </li>
    </>
  );
}

export default NavigationLogin;
