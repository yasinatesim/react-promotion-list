import { createSlice } from '@reduxjs/toolkit'
import { getPromotionListService } from 'services/promotion';

import { getPromotionListAction } from './actions'
import initialState from './initialState'

export const promotionsSlice = createSlice({
    initialState,
    name: 'promotions',
    reducers: {
      getPromotionList: getPromotionListAction,
    },
})

export const getPromotions = () => async (dispatch: Function) => {
  try {
    const response = await getPromotionListService()
    dispatch(getPromotionList(response));
  } catch (err) {
    throw new Error(err as string);
  }
};


export const { getPromotionList } = promotionsSlice.actions

export default promotionsSlice.reducer
