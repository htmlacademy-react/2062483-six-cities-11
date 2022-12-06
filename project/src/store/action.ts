import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offers-type';

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

