import {NameSpace} from '../../constants';
import {State} from '../../types/state';
import {Offer} from '../../types/offers-type';

export const getFavoritesOffers = (state: State): Offer[] => state[NameSpace.Favorites].favorites;
export const getFavoritesDataLoadedStatus = (state: State): boolean => state[NameSpace.Favorites].isFavoritesDataLoaded;
