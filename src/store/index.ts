import { configureStore } from '@reduxjs/toolkit'

import tags from './tags'

export const store = configureStore({
    reducer: {
        tags,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
