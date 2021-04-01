import request from 'utils/request';

const locationApi = {
  getLocation: () => request.get('resource_manager/get_subareas'),
}

export default locationApi;