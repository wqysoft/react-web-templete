import request from '@/utils/request';
export default {
  loginIn: data => request.post('user/login', data),

  getCode: params => request.get(`user/code?user_code_id=${params}`, {id: params}),
  
}