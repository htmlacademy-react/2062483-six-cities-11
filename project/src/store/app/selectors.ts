import {NameSpace} from '../../constants';
import {State} from '../../types/state';

export const getCurrentCity = (state: State): string => state[NameSpace.Action].currentCity;
export const getCurrentSortType = (state: State): string => state[NameSpace.Action].currentSortType;
