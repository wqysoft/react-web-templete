import request from 'axios'
import '@/mock/index.js'

const api = {
  get: () => request.get(`/get/user_list`),
}

export default api;