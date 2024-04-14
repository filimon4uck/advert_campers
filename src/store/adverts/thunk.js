import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdverts } from 'api_advert/adverts';

export const fetchAdvertsThunk = createAsyncThunk(
  'adverts/fetchAdverts',
  () => {
    fetchAdverts();
  }
);
