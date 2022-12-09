import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {FavoritesData} from '../../types/state';
import {fetchFavorites} from '../api-actions';

const initialState: FavoritesData = {
  favorites: [],
  isFavoritesDataLoaded: false,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isFavoritesDataLoaded = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesDataLoaded = false;
      });
  }
});
