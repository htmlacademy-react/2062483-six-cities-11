import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {fetchFavorites} from '../api-actions';
import {Offer} from '../../types/offers-type';

type FavoritesData = {
  favorites: Offer[];
  isFavoritesDataLoaded: boolean;
}

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
