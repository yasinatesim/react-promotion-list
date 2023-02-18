import { configureStore } from '@reduxjs/toolkit'

import tags from './reducers/tags'
import promotions from './reducers/promotions'

export const store = configureStore({
    reducer: {
    tags,
    promotions,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
