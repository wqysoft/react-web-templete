import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LayoutMain from '@/layouts/Layout';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '@/store';
import { history } from './routerConfig';
console.log(history)

ReactDOM.render(
  <BrowserRouter>
    {/*<Provider store={store}>*/}
      <ConfigProvider locale={zhCN}>
        <LayoutMain />
      </ConfigProvider>
    {/*</Provider>*/}
  </BrowserRouter>,
  document.getElementById('root')
);
