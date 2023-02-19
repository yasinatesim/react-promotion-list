import { PayloadAction } from '@reduxjs/toolkit';

export const getTagListAction = (state: any, action: PayloadAction<any>): any => {
  return [...state, ...action.payload];
};
