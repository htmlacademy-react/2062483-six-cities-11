import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Offer} from '../types/offers-type';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../constants';
import {saveToken, dropToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {Review, PostReview} from '../types/reviews-type.js';
import {pushNotification} from './notifications/notifications';
import {StatusCodes} from 'http-status-codes';
import {FavoriteStatus} from '../types/favorite-status.js';

export const fetchOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Offers);

      return data;
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to get hotels'}));
      throw error;
    }
  }
);

export const fetchCurrentOffer = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchCurrentOffer',
  async (hotelId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${hotelId}`);

      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === StatusCodes.NOT_FOUND) {
          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      }
      dispatch(pushNotification({type: 'error', message: 'Failed to get hotel'}));
      throw error;
    }
  }
);

export const fetchFavorites = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(APIRoute.Favorite);

      return data;
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to get favorites hotels'}));
      throw error;
    }
  }
);

export const setFavoriteStatus = createAsyncThunk<Offer, FavoriteStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'setFavoriteStatus',
  async ({id, status}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`, {id, status});

      return data;
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to set favorite'}));
      throw error;
    }
  },
);

export const fetchComments = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (hotelId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${hotelId}`);

      return data;
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to get comments'}));
      throw error;
    }
  }
);

export const postComment = createAsyncThunk<Review[], PostReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, {comment, rating});

      return data;
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to send comment'}));
      throw error;
    }
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffers',
  async (hotelId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${hotelId}/nearby`);

      return data;
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to get nearby hotels'}));
      throw error;
    }
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(fetchFavorites());

      return data;
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to login, please try again'}));
      throw error;
    }

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(redirectToRoute(AppRoute.Login));
    } catch (error) {
      dispatch(pushNotification({type: 'error', message: 'Failed to logout, please try again'}));
      throw error;
    }
  },
);
