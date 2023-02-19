import { configureStore } from '@reduxjs/toolkit';

import promotions from './reducers/promotions';
import tags from './reducers/tags';

export const store = configureStore({
  reducer: {
    tags,
    promotions,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
