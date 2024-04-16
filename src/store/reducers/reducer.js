import { advertsReducer } from 'store/adverts/advertsSlice';
import { modalReducer } from 'store/modal/modalSlice';

export const rootReducer = {
  adverts: advertsReducer,
  modal: modalReducer,
};
