import { createSlice } from '@reduxjs/toolkit';

import { getTagListService } from 'services/tag';

import { getTagListAction } from './actions';
import initialState from './initialState';

export const tagsSlice = createSlice({
  initialState,
  name: 'tags',
  reducers: {
    getTagList: getTagListAction,
  },
});

export const getTags = () => async (dispatch: Function) => {
  try {
    const response = await getTagListService();
    dispatch(getTagList(response));
  } catch (err) {
    throw new Error(err as string);
  }
};

export const { getTagList } = tagsSlice.actions;

export default tagsSlice.reducer;
