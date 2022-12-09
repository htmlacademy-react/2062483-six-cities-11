import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {userActions} from './user-actions/user-actions';
import {offersData} from './offers-data/offers-data';
import {favoritesData} from './favorites-data/favorites-data';
import {authorizationAction} from './authorization-action/authorization-action';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.User]: authorizationAction.reducer,
  [NameSpace.Action]: userActions.reducer,
});
