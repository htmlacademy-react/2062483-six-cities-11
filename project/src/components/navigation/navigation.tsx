import {useAppSelector} from '../../hooks/index';
import NavigationLogin from './navigation-login';
import NavigationNotLogin from './navigation-not-login';
import {getUserInfo} from '../../store/authorization-action/selectors';

function Navigation(): JSX.Element {
  const user = useAppSelector(getUserInfo);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {user ? <NavigationLogin/> : <NavigationNotLogin/>}
      </ul>
    </nav>
  );
}

export default Navigation;
