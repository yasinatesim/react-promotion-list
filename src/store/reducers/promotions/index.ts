import { createSlice } from '@reduxjs/toolkit';

import { getPromotionListService } from 'services/promotion';

import { getPromotionsListAction } from './actions';
import initialState from './initialState';

export const promotionsSlice = createSlice({
  initialState,
  name: 'promotions',
  reducers: {
    getPromotionList: getPromotionsListAction,
  },
});

export const getPromotions =
  ({ tagId }: { tagId: string | null }) =>
  async (dispatch: Function) => {
    try {
      const response = await getPromotionListService({ tagId: tagId || null });
      dispatch(getPromotionList(response));
    } catch (err) {
      throw new Error(err as string);
    }
  };

export const { getPromotionList } = promotionsSlice.actions;

export default promotionsSlice.reducer;
