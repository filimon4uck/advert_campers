import { createSlice } from '@reduxjs/toolkit';
import { fetchAdvertsThunk } from './thunk';
import {
  handleFulfilledFetchAdverts,
  handlePendingFetchAdverts,
  handleRejectedFetchAdverts,
} from './handlers';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    page: 1,
    isLoadMore: true,
    isLoading: false,
    error: null,
  },
  reducers: {
    loadMore(state, _) {
      if (state.isLoadMore) state.page = state.page + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdvertsThunk.pending, handlePendingFetchAdverts)
      .addCase(fetchAdvertsThunk.fulfilled, handleFulfilledFetchAdverts)
      .addCase(fetchAdvertsThunk.rejected, handleRejectedFetchAdverts);
  },
});
export const advertsReducer = advertsSlice.reducer;
export const { loadMore } = advertsSlice.actions;
