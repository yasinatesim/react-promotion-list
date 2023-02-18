import { PayloadAction } from '@reduxjs/toolkit';

const getPromotionsList = (_state: any, action: PayloadAction<any>): any => {
  return [...action.payload];
};

export default getPromotionsList;
