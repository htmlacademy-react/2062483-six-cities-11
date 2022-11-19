import cn from 'classnames';

type BookmarkButtonProps = {
  className: string;
}

function BookmarkButton({className}: BookmarkButtonProps) : JSX.Element {
  return (
    <button className={cn(className, 'place-card__bookmark-button', 'button')}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;

