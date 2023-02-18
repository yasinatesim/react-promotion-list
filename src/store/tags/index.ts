import { createSlice } from '@reduxjs/toolkit'
import { getTagList as getTagListService } from 'services/tag';

import { getTagListAction } from './actions'
import initialState from './initialState'

export const tagSlice = createSlice({
    initialState,
    name: 'tags',
    reducers: {
      getTagList: getTagListAction,
    },
})

export const getTags = () => async (dispatch: Function) => {
  try {
    const response = await getTagListService()
    dispatch(getTagList(response));
  } catch (err) {
    throw new Error(err as string);
  }
};


export const { getTagList } = tagSlice.actions

export default tagSlice.reducer
