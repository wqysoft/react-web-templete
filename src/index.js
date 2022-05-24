import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import LayoutMain from './layout'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import { history } from './routerConfig'

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <LayoutMain />
      </ConfigProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
)
