export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAX_RATING = 5;

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
    value: 1,
    title: 'terribly'
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 5,
    title: 'perfect',
  }
];

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const CardListClassName = {
  cities: 'cities__places-list',
  near: 'near-places__list'
};

export const COUNT_NEAR_PLACES = 3;

export const DEFAULT_CITY = 'Paris';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_SORT_OFFERS_TYPE = 'Popular';

export const SortType = {
  Popular: 'Popular',
  lowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  Rating: 'Top rated first'
};
