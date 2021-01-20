import request from 'axios'
import '@/mock/index.js'

const api = {
  get: () => request.get(`/get/list`),
}

export default api