import { axios } from 'hooks/worker'

const URL = 'url주소'


export const getApi = () => {
  return axios.get(URL)
}