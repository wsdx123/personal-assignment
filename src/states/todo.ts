import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface temp {
  id: number
  title: string
  done: boolean
}

export interface TodoState {
  value: temp[]
}

const INITIAL_STATE = {
  value: [
    {
      id: 1,
      title: '계란 2판 사기',
      done: false,
    },
    {
      id: 2,
      title: '맥북 프로 M1 Max CTO 버전 사기',
      done: false,
    },
    {
      id: 3,
      title: '오늘의 TIL 작성하기',
      done: false,
    },
  ],
}

const systemSlice = createSlice({
  name: 'sliceTest',
  initialState: INITIAL_STATE as TodoState,
  reducers: {
    setTodoList: (state, action) => {
      state.value = action.payload
    },
    resetTodoList: () => INITIAL_STATE,
  },
})

export const { setTodoList, resetTodoList } = systemSlice.actions

export default systemSlice.reducer

export const getTodoList = (state: RootState) => state.sliceTest.value
