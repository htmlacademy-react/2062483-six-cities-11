import {MouseEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import {logoutAction} from '../../store/api-actions';

function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const handleClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
    navigate(AppRoute.Login);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={`${AppRoute.Favorites}`}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{user?.email}</span>
            <span className="header__favorite-count">3</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to={`${AppRoute.Login}`}
            onClick={handleClick}
          >
            <span className="header__signout">
              {user ? 'Sign out' : 'Sign in'}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
