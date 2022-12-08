import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers-type';
import {UserData} from '../types/user-data';
import {AppRoute} from '../constants';

export const setCurrentCity = createAction('setCurrentCity', (city: string) => ({
  payload: {
    city: city
  }
}));

export const setOffers = createAction('setOffers', (offers: Offer[]) => ({
  payload: {
    offers: offers
  }
}));

export const setSortType = createAction('setSortType', (type: string) => ({
  payload: {
    type
  }
}));

export const setOffersLoaded = createAction('setOffersLoaded', (status: boolean) => ({
  payload: {
    status
  }
}));

export const setAuthStatus = createAction('setAuthStatus', (authStatus: string) => ({
  payload: {
    authStatus
  }
}));

export const setLoginError = createAction('setLoginError', (errorLogin: boolean) => ({
  payload: {
    errorLogin
  }
}));

export const setUser = createAction('setUser', (user: UserData | null) => ({
  payload: {
    user
  }
}));

export const setFavorites = createAction('setFavorites', (favorites: Offer[]) => ({
  payload: {
    favorites
  }
}));

export const redirectToRoute = createAction<AppRoute>('page/redirectToRoute');
