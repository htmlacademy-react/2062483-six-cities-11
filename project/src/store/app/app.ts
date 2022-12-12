import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, DEFAULT_CITY, DEFAULT_SORT_OFFERS_TYPE} from '../../constants';

type UserAction = {
  currentCity: string;
  currentSortType: string;
}

const initialState: UserAction = {
  currentCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT_OFFERS_TYPE
};

export const userActions = createSlice({
  name: NameSpace.Action,
  initialState,
  reducers: {
    changeCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    changeCurrentSortType: (state, action: PayloadAction<string>) => {
      state.currentSortType = action.payload;
    }
  },
});

export const {changeCurrentCity, changeCurrentSortType} = userActions.actions;
