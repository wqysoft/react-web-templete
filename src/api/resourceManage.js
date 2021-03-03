import request from 'axios'

export default {
  getCountByType: ({level, area_name}) => request.get(`/station/count_by_type?level=${level}&area_name=${area_name}`,),
}