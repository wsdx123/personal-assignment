import { axios } from 'hooks/worker'

// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

const URL = `/api/search/Nell/?sr=artist&display=10&key=${process.env.REACT_APP_MUSIC_API}&v=0.5`

export const getApi = () => {
  return axios.get(URL)
}
