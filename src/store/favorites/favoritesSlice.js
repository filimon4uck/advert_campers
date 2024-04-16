import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    // addToFavorites(state, { payload }) {
    //   if (state.favorites.find(({ _id }) => payload._id === _id)) {
    //     return;
    //   }
    //   state.favorites.push(payload);
    // },
    //   removeFromFavorites(state, { payload }) {
    //     state.favorites = state.favorites.filter(({ id }) => id !== payload);
    // },
    toggleFavorites(state, { payload }) {
      const existingIndex = state.favorites.findIndex(
        ({ _id }) => _id === payload._id
      );

      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(payload);
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { toggleFavorites } = favoritesSlice.actions;
