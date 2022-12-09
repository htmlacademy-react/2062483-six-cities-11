import {store} from '../store/store';
import {AuthorizationStatus} from '../constants';
import {Offer} from './offers-type';
import {UserData} from '../types/user-data';

export type FavoritesData = {
  favorites: Offer[];
  isFavoritesDataLoaded: boolean;
}

export type OffersData = {
  offers: Offer[];
  isOffersDataLoaded: boolean;
};

export type AuthorizationAction = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  loginError: boolean;
};

export type UserAction = {
  currentCity: string;
  currentSortType: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
