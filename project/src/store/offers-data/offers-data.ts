import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {OffersData} from '../../types/state';
import {fetchOffers} from '../api-actions';

const initialState: OffersData = {
  offers: [],
  isOffersDataLoaded: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoaded = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoaded = false;
      });
  }
});
