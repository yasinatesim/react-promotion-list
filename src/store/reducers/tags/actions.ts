import { PayloadAction } from '@reduxjs/toolkit';

import { Tag } from 'types/models';

export const getTagListAction = (state: any, action: PayloadAction<any>): any => {
  return [...state, ...action.payload];
};

export const setActiveTagAction = (state: any, action: PayloadAction<any>): any => {
  const { activeTag } = action.payload;

  return state.map((tag: Tag) => {
    if (tag.Id === activeTag) {
      return {
        ...tag,
        Active: true,
      };
    }

    return {
      ...tag,
      Active: false,
    };
  });
};
