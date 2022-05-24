import request from '@/utils/request'

const api = {
  getCountByType: (level, area_name) =>
    request.get(`/station/count_by_type?level=${level}&area_name=${area_name}`),
}

export default api
