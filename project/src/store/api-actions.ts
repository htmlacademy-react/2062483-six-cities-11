import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offers-type';
import {setOffers, setOffersLoaded} from './action';
import {APIRoute} from '../constants';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer[]>(APIRoute.Offers);
      dispatch(setOffers(data));
      dispatch(setOffersLoaded(true));
    } catch {
      dispatch(setOffersLoaded(false));
    }
  }
);
