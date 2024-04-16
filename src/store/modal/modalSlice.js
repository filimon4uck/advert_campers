import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isModalOpen: false, id: null },
  reducers: {
    openModal(state, { payload }) {
      state.isModalOpen = true;
      state.id = payload;
    },
    closeModal(state, _) {
      state.isModalOpen = false;
      state.id = null;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
