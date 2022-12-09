import cn from 'classnames';
import {SortType} from '../../constants';
import SortTab from '../sort-tab/sort-tab';
import {useAppSelector} from '../../hooks';
import {useRef, useState} from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {getCurrentSortType} from '../../store/user-actions/selectors';

function SortForm(): JSX.Element{
  const [isSortOpen, setSortType] = useState(false);

  const ref = useRef(null);
  const onSortListClick = () => setSortType(!isSortOpen);

  const currentSortType = useAppSelector(getCurrentSortType);

  useOnClickOutside(ref, () => setSortType(false));

  return (
    <form className="places__sorting" action="#" method="get" ref={ref}>
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortListClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', isSortOpen && 'places__options--opened')}>
        {Object.values(SortType).map((type) => (
          <SortTab
            key={type}
            isActive={type === currentSortType}
            tabName={type}
            sortListStatus={setSortType}
          />
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
