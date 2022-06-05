import { configureStore } from '@reduxjs/toolkit'

import musicData from './musicData'

export const store = configureStore({
  reducer: { musicData },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
