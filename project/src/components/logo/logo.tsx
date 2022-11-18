import {Link} from 'react-router-dom';
import {LogoSize} from '../../constants';
import {AppRoute} from '../../constants';

type LogoProps = {
  type: 'header' | 'footer';
}

function Logo({type}: LogoProps): JSX.Element{
  const {width, height} = LogoSize[type];
  return (
    <Link className={`${type}__logo-link`} to={`${AppRoute.Main}`}>
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
