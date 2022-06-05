import { axios } from 'hooks/worker'

// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'
const URL = `/2.0/?method=track.search&api_key=${process.env.REACT_APP_MUSIC_API}&format=json`
interface Params {
  track: string
}

export const getApi = (params: Params) => {
  return axios.get(`${URL}`, { params })
}
