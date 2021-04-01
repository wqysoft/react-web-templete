import request from '@/utils/request';

const loginApi = {
  loginIn: data => request.post('user/login', data),

  getCode: params => request.get(`user/code?user_code_id=${params}`, {id: params}),
  
}

export default loginApi;