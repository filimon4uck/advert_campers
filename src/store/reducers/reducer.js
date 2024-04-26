import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from 'store/adverts/advertsSlice';
import { favoritesReducer } from 'store/favorites/favoritesSlice';
import { filterReducer } from 'store/filter/filterSlice';
import { modalReducer } from 'store/modal/modalSlice';
const persistConfig = {
  key: 'favorites',
  storage,
};
const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const reducer = {
  adverts: advertsReducer,
  modal: modalReducer,
  favorites: persistedReducer,
  filter: filterReducer,
};
