export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_RATING = 5;

export const CommentLength = {
  MAX: 300,
  MIN: 50
};

export const MAX_REVIEW_COUNT = 10;

export enum FavoriteStatus {
  Favorite = 1,
  NotFavorite = 0
}

export const LogoSize = {
  header: {
    width: 81,
    height: 41
  },
  footer: {
    width: 64,
    height: 33
  }
};

export const BookmarkButtonSize = {
  property: {
    width: 31,
    height: 33
  },
  main: {
    width: 18,
    height: 19
  }
};

export const cardImageSize = {
  favorites: {
    className: 'favorites',
    width: 150,
    height: 110
  },
  cities: {
    className: 'cities',
    width: 260,
    height: 200
  },
  near: {
    className: 'near-places',
    width: 260,
    height: 200
  }
};

export const RATING = [
  {
    value: '5',
    title: 'perfect',
  },
  {
    value: '4',
    title: 'good',
  },
  {
    value: '3',
    title: 'not bad',
  },
  {
    value: '2',
    title: 'badly',
  },
  {
    value: '1',
    title: 'terribly'
  }
];

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const CardListClassName = {
  cities: 'cities__places-list',
  near: 'near-places__list'
};

export const COUNT_NEAR_PLACES = 3;

export const COUNT_PROPERTY_IMG = 6;

export const DEFAULT_CITY = 'Paris';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_SORT_OFFERS_TYPE = 'Popular';

export const SortType = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  Rating: 'Top rated first'
};

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Favorite = '/favorite'
}

export const BACKEND_URL = 'https://11.react.pages.academy/six-cities';

export const REQUEST_TIMEOUT = 5000;

export enum NameSpace {
  Offers = 'OFFERS',
  Favorites = 'FAVORITES',
  User = 'USER',
  Action = 'ACTION',
  Notifications = 'NOTIFICATIONS',
  Reviews = 'REVIEWS',
}

export enum FetchStatus {
  IDLE = 'Idle',
  LOADING = 'Loading',
  SUCCESS = 'Success',
  FAILED = 'Failed'
}

export const DEFAUTT_DURATION = 4000;
