import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {userActions} from './app/app';
import {offersData} from './offers/offers';
import {favoritesData} from './favorites/favorites';
import {authorizationAction} from './authorization/authorization';
import {notification} from './notifications/notifications';
import {reviews} from './comments/comments';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.User]: authorizationAction.reducer,
  [NameSpace.Action]: userActions.reducer,
  [NameSpace.Notifications]: notification.reducer,
  [NameSpace.Reviews]: reviews.reducer,
});
