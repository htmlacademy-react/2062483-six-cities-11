import cn from 'classnames';
import {BookmarkButtonSize} from '../../constants';

type BookmarkButtonProps = {
  className: string;
  type: 'property' | 'main';
}

function BookmarkButton({className, type}: BookmarkButtonProps) : JSX.Element {
  const {width, height} = BookmarkButtonSize[type];
  return (
    <button className={cn(className, 'place-card__bookmark-button', 'button')}>
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;

