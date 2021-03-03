import axios from 'axios';
import { message } from 'antd';
import qs from 'qs';

const TIMEOUT = 5000;
const FORM_DATA_CONTENT_TYPE = 'application/x-www-form-urlencoded';
const LOCAL_URL = 'http://localhost:3000';

const _axios = axios.create({
  baseURL: LOCAL_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': FORM_DATA_CONTENT_TYPE,
  },
})

_axios.interceptors.request.use(
  config => {
    // get 方法不做处理，一般 get 方法不会携带请求体数据
    if (
      config.method === 'get' ||
      config.headers['Content-Type'] !== FORM_DATA_CONTENT_TYPE
    ) {
      return config;
    }

    const { data, ...restConfig } = config;
    // 默认情况下 qs.stringify 会 忽略值为 undefined，值为 null 会以空字符串存在
    // 所以使用 skipNulls 参数直接忽略 null
    const newData = qs.stringify(data, { skipNulls: true });

    return { ...restConfig, data: newData };
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
