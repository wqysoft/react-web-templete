import React from 'react';
import {Layout} from 'antd';
import {Route, Redirect, Switch} from 'react-router-dom';
import {routerConfig} from '@/routerConfig';

const MainLayout = () => {
  const renderRouteItem = item => {
   return <Route key={item.path} path={item.path} component={item.component}></Route>

  }
  
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
    <Layout.Content>
      <Switch>
        <Redirect exact from="/" to={routerConfig[0].path}></Redirect>
        {renderRouteList(routerConfig)}
      </Switch>
    </Layout.Content>
  )
}

export default MainLayout;
