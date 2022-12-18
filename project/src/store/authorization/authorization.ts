import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus, FetchStatus} from '../../constants';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {UserData} from '../../types/user-data';

type AuthorizationAction = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  loginLoadingStatus: FetchStatus;
};


const initialState: AuthorizationAction = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  loginLoadingStatus: FetchStatus.IDLE,
};

export const authorizationAction = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.loginLoadingStatus = FetchStatus.SUCCESS;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.loginLoadingStatus = FetchStatus.FAILED;
      })
      .addCase(loginAction.pending, (state) => {
        state.loginLoadingStatus = FetchStatus.LOADING;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.loginLoadingStatus = FetchStatus.IDLE;
      });
  }
});
