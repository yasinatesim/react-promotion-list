import { PayloadAction } from '@reduxjs/toolkit';

import { MODAL_NONE } from 'components/Modal/constants';

export const closeModalAction = (_state: any, _action: PayloadAction<any>): any => {
  return {
    type: MODAL_NONE,
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
