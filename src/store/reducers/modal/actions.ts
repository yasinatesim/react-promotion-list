import { PayloadAction } from '@reduxjs/toolkit';

import { CLOSE_MODAL } from './constants';

export const closeModalAction = (_state: any, _action: PayloadAction<any>): any => {
  return {
    type: CLOSE_MODAL,
  };
};

export const openModalAction = (_state: any, action: PayloadAction<any>): any => {
  const { type, props } = action.payload;
  return {
    type,
    props: {
      ...props,
    },
  };
};
