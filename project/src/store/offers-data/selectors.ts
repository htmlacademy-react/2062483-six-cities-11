import {NameSpace} from '../../constants';
import {State} from '../../types/state';
import {Offer} from '../../types/offers-type';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoaded;
