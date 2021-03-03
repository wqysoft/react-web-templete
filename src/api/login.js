import request from '@/utils/request';
export default {
  loginIn: body => request.post('user/login', body),

  getCode: params => request.get(`user/code?user_code_id${params}`),
  
}