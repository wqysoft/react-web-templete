import axios from 'axios';
import { message } from 'antd';

const TIMEOUT = 5000;
// const FORM_DATA_CONTENT_TYPE = 'application/x-www-form-urlencoded';
// const FORM_DATA_CONTENT_TYPE = 'application/json';
const LOCAL_URL = 'http://localhost:3000';

const _axios = axios.create({
  baseURL: LOCAL_URL,
  timeout: TIMEOUT,
  // headers: {
  //   'Content-Type': FORM_DATA_CONTENT_TYPE,
  // },
})

_axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token');
      _axios.defaults.headers.Authorization = localStorage.getItem('token');
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
)

_axios.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      message.error('接口出错了~~~');
      return Promise.reject(response.data);
    }
    return response.data;
  },
  err => {
    if (err.message === `timeout of ${TIMEOUT}ms exceeded`) {
      message.error('请求超时');
    } else {
      message.error('接口出错了~~~');
    }
    return Promise.reject(err);
  },
)

export default _axios;
