import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface temp {
  title: string
  poster: string
}

export interface TodoState {
  value: temp[]
}

const INITIAL_STATE = {
  value: [{ title: '', poster: '' }],
}

const systemSlice = createSlice({
  name: 'sliceTest',
  initialState: INITIAL_STATE as TodoState,
  reducers: {
    setTodoList: (state, action) => {
      // state.value = action.payload
      // const temp = action.payload.rss
      console.log(action.payload)
    },
    resetTodoList: () => INITIAL_STATE,
  },
})

export const { setTodoList, resetTodoList } = systemSlice.actions

export default systemSlice.reducer

export const getTodoList = (state: RootState) => state.sliceTest.value
