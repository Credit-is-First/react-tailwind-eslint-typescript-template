import Axios from 'axios'

import Storage, { TOKEN_STORAGE_KEY } from './storage'

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

axios.interceptors.request.use((options) => {
  const token = Storage.get<string>(TOKEN_STORAGE_KEY)
  if (token !== null && options.headers) {
    options.headers.Authorization = token
  }
  return options
})

export default axios
