import { createSlice } from '@reduxjs/toolkit';

import { getTagListService } from 'services/tag';

import { getTagListAction, setActiveTagAction } from './actions';
import initialState from './initialState';

export const tagsSlice = createSlice({
  initialState,
  name: 'tags',
  reducers: {
    getTagList: getTagListAction,
    setActiveTag: setActiveTagAction,
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

export const updateActiveTag =
  ({ activeTag }: { activeTag: number }) =>
  (dispatch: Function) => {
    dispatch(setActiveTag({ activeTag }));
  };

export const { getTagList, setActiveTag } = tagsSlice.actions;

export default tagsSlice.reducer;
