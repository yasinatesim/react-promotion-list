import { configureStore } from '@reduxjs/toolkit';

import modal from './reducers/modal';
import promotions from './reducers/promotions';
import tags from './reducers/tags';

export const store = configureStore({
  reducer: {
    tags,
    promotions,
    modal,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
