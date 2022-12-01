import cn from 'classnames';
import {SyntheticEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {setCurrentCity} from '../../store/action';

type CityItemPtops = {
  cityName: string;
  isActive: boolean;
}

function CityItem({cityName, isActive}: CityItemPtops): JSX.Element{
  const dispatch = useAppDispatch();

  const onCityClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setCurrentCity(cityName));
  };

  return (
    <li className="locations__item" onClick={onCityClick}>
      <a
        className={cn('locations__item-link', 'tabs__item', isActive && 'tabs__item--active')}
        href="/#"
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default CityItem;
