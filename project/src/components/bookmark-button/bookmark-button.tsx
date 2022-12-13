import {MouseEvent} from 'react';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {BookmarkButtonSize, FavoriteStatus, AuthorizationStatus, AppRoute} from '../../constants';
import {redirectToRoute} from '../../store/action';
import {setFavoriteStatus} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/authorization/selectors';

type BookmarkButtonProps = {
  className: string;
  type: 'property' | 'main';
  isFavorite: boolean;
  id: number | string | undefined;
}

function BookmarkButton({className, type, isFavorite, id}: BookmarkButtonProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleClick = (evt: MouseEvent) => {
    evt.preventDefault();
    if (id && authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(setFavoriteStatus({
        id: +id,
        status: isFavorite ? FavoriteStatus.NotFavorite : FavoriteStatus.Favorite,
      }));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  const {width, height} = BookmarkButtonSize[type];
  return (
    <button
      className={cn(className, 'place-card__bookmark-button', 'button')}
      onClick={handleClick}
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;

