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
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdvertsThunk.pending, handlePendingFetchAdverts)
      .addCase(fetchAdvertsThunk.fulfilled, handleFulfilledFetchAdverts)
      .addCase(fetchAdvertsThunk.rejected, handleRejectedFetchAdverts);
  },
});
export const advertsReducer = advertsSlice.reducer;
