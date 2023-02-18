import { PayloadAction } from '@reduxjs/toolkit';

const getTagList = (state: any, action: PayloadAction<any>): any => {
  return [...state, ...action.payload];
};

export default getTagList;
