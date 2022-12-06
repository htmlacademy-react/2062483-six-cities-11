import cn from 'classnames';
import {useAppDispatch} from '../../hooks';
import {setSortType} from '../../store/action';

type SortTabProps = {
  isActive: boolean;
  tabName: string;
  sortListStatus: (sortStatus: boolean) => void;
}

function SortTab({isActive, tabName, sortListStatus}: SortTabProps): JSX.Element{
  const dispatch = useAppDispatch();

  const onSortClick = () => {
    dispatch(setSortType(tabName));
    sortListStatus(false);
  };

  return (
    <li
      className={cn('places__option', isActive && 'places__option--active')}
      tabIndex={0}
      onClick={onSortClick}
    >
      {tabName}
    </li>
  );
}

export default SortTab;
