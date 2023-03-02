import { createSlice } from '@reduxjs/toolkit';

import { closeModalAction, openModalAction } from './actions';
import initialState from './initialState';

export const modalSlice = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    closeModal: closeModalAction,
    openModal: openModalAction,
  },
});

export const handleCloseModal =
  () =>
  (dispatch: Function): void => {
    dispatch(closeModal({}));
  };

export const handleOpenModal =
  (type: string, props = {}) =>
  (dispatch: Function) => {
    dispatch(openModal({ type, props }));
  };

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
