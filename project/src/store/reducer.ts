import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, setOffers, setSortType, setOffersLoaded, setAuthStatus, setLoginError, setUser, setFavorites} from './action';
import {Offer} from '../types/offers-type';
import {DEFAULT_CITY, DEFAULT_SORT_OFFERS_TYPE, AuthorizationStatus} from '../constants';
import {UserData} from '../types/user-data';

type InitialState = {
  currentCity: string;
  offers: Offer[];
  favorites: Offer[];
  sortOffersType: string;
  isOffersLoaded: boolean;
  authorizationStatus: string;
  loginError: boolean;
  user: UserData | null;
};

const initialState: InitialState = {
  currentCity: DEFAULT_CITY,
  offers: [],
  favorites: [],
  sortOffersType: DEFAULT_SORT_OFFERS_TYPE,
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginError: false,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setSortType, (state, action) => {
      state.sortOffersType = action.payload.type;
    })
    .addCase(setOffersLoaded, (state, action) => {
      state.isOffersLoaded = action.payload.status;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
    })
    .addCase(setLoginError, (state, action) => {
      state.loginError = action.payload.errorLogin;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload.user;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload.favorites;
    });
});
