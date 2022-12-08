import {useAppSelector} from '../../hooks/index';
import NavigationLogin from './navigation-login';
import NavigationNotLogin from './navigation-not-login';

function Navigation(): JSX.Element {
  const user = useAppSelector((state) => state.user);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {user ? <NavigationLogin/> : <NavigationNotLogin/>}
      </ul>
    </nav>
  );
}

export default Navigation;
