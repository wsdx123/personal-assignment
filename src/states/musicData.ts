import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface IImage {
  size: string
  '#text': string
}

interface OriginData {
  artist: string
  image: IImage[]
  mbid: string
  name: string
}

interface IMusic {
  artist: string
  image: IImage
  mbid: string
  name: string
}

export interface MusicState {
  value: IMusic[]
}

const INITIAL_STATE = {
  value: [
    {
      artist: '',
      image: { size: '', '#text': '' },
      name: '',
      mbid: '',
    },
  ],
}

const systemSlice = createSlice({
  name: 'musicData',
  initialState: INITIAL_STATE as MusicState,
  reducers: {
    setMusicData: (state, action) => {
      state.value = action.payload.map((item: OriginData) => {
        return {
          artist: item.artist,
          image: item.image.find((i: IImage) => i.size === 'small'),
          name: item.name,
          mbid: item.mbid,
        }
      })
    },
    resetMusicData: () => INITIAL_STATE,
  },
})

export const { setMusicData, resetMusicData } = systemSlice.actions

export default systemSlice.reducer

export const getMusicData = (state: RootState) => state.musicData.value
