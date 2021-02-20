import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import { routerConfig } from '@/routerConfig'
import styles from './index.module.scss'

const CusContent = () => {
  const renderRouteItem = item => (
    <Route key={item.path} path={item.path} component={item.component}></Route>
  )

  const renderRouteList = list =>
    list.reduce((acc, item) => {
      if (item.children === void 0) {
        acc.push(renderRouteItem(item))
        return acc
      }

      item.children.forEach(subItem => {
        acc.push(renderRouteItem(subItem))
      })
      return acc
    }, [])

  return (
    <Layout.Content className={styles.content}>
      <Switch>
        <Redirect exact from="/" to={routerConfig[0].path}></Redirect>
        {renderRouteList(routerConfig)}
        <Redirect from="/*" to="/404"></Redirect>
      </Switch>
    </Layout.Content>
  )
}

export default CusContent
