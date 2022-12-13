import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../constants';
import {fetchFavorites, setFavoriteStatus} from '../api-actions';
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
      })
      .addCase(setFavoriteStatus.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, action.payload]
          .map((offer) => offer.id === action.payload.id ? action.payload : offer)
          .filter((offer) => offer.isFavorite);
      });
  }
});
