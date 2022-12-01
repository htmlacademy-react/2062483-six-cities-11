import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, setOffers} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY} from '../constants';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});
