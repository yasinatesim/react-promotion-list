import { configureStore } from '@reduxjs/toolkit';

import promotions from './reducers/promotions';
import tags from './reducers/tags';

export const store = configureStore({
  reducer: {
    tags,
    promotions,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
