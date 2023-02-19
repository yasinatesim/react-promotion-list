import { PayloadAction } from '@reduxjs/toolkit';

export const getPromotionsListAction = (_state: any, action: PayloadAction<any>): any => {
  return [...action.payload];
};
