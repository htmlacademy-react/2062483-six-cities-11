import {createReducer} from '@reduxjs/toolkit';
import {setCurrentCity, setOffers, setSortType} from './action';
import {offers} from '../mocks/offers';
import {DEFAULT_CITY, DEFAULT_SORT_OFFERS_TYPE} from '../constants';

const initialState = {
  currentCity: DEFAULT_CITY,
  offers,
  sortOffersType: DEFAULT_SORT_OFFERS_TYPE
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
    }
    );
});
