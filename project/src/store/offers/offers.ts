import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, FetchStatus} from '../../constants';
import {fetchOffers, fetchNearbyOffers, fetchCurrentOffer, setFavoriteStatus} from '../api-actions';
import {Offer} from '../../types/offers-type';

type OffersData = {
  offers: Offer[];
  offerLoadingStatus: FetchStatus;
  nearbyOffers: Offer[];
  nearbyOfferLoadingStatus: FetchStatus;
  currentOffer: Offer | null;
  currentOfferLoadingStatus: FetchStatus;
};

const initialState: OffersData = {
  offers: [],
  offerLoadingStatus: FetchStatus.IDLE,
  nearbyOffers: [],
  nearbyOfferLoadingStatus: FetchStatus.IDLE,
  currentOffer: null,
  currentOfferLoadingStatus: FetchStatus.IDLE,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offerLoadingStatus = FetchStatus.LOADING;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offerLoadingStatus = FetchStatus.SUCCESS;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offerLoadingStatus = FetchStatus.FAILED;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOfferLoadingStatus = FetchStatus.LOADING;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.nearbyOfferLoadingStatus = FetchStatus.SUCCESS;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOfferLoadingStatus = FetchStatus.FAILED;
      })
      .addCase(fetchCurrentOffer.pending, (state) => {
        state.currentOfferLoadingStatus = FetchStatus.LOADING;
      })
      .addCase(fetchCurrentOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.currentOfferLoadingStatus = FetchStatus.SUCCESS;
      })
      .addCase(fetchCurrentOffer.rejected, (state) => {
        state.currentOfferLoadingStatus = FetchStatus.FAILED;
      })
      .addCase(setFavoriteStatus.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
        state.nearbyOffers = state.nearbyOffers.find((offer) => offer.id === action.payload.id)
          ? state.nearbyOffers.map((offer) => offer.id === action.payload.id ? action.payload : offer)
          : state.nearbyOffers;
      });
  }
});
