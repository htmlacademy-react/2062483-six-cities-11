import {FetchStatus, NameSpace} from '../../constants';
import {State} from '../../types/state';
import {Offer} from '../../types/offers-type';
import {createSelector} from '@reduxjs/toolkit';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getOfferLoadingStatus = (state: State): FetchStatus => state[NameSpace.Offers].offerLoadingStatus;

export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offers].nearbyOffers;
export const getNearbyOffersLoadingStatus = (state: State): FetchStatus => state[NameSpace.Offers].nearbyOfferLoadingStatus;

export const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Offers].currentOffer;
export const getCurrentOfferLoadingStatus = (state: State): FetchStatus => state[NameSpace.Offers].currentOfferLoadingStatus;

export const getOffersStatus = createSelector([getOfferLoadingStatus], (status) => ({
  isLoading: [FetchStatus.IDLE, FetchStatus.LOADING].includes(status),
  isSuccess: status === FetchStatus.SUCCESS,
  isFailed: status === FetchStatus.FAILED
}));

export const getCurrentOfferStatus = createSelector([getCurrentOfferLoadingStatus], (status) => ({
  isLoading: [FetchStatus.IDLE, FetchStatus.LOADING].includes(status),
  isSuccess: status === FetchStatus.SUCCESS,
  isFailed: status === FetchStatus.FAILED
}));
