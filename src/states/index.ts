import { configureStore } from '@reduxjs/toolkit'

import sliceTest from './todo'

export const store = configureStore({
  reducer: { sliceTest },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
