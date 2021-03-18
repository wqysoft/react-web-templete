import React from 'react';
import { useSelector } from 'react-redux';
import { Layout, Spin } from 'antd';
import Head from './Head';
import Content from './Content';
import Sider from './Sider';
import { Redirect, useLocation } from 'react-router-dom';


const LayoutMain = () => {

  const isLogining = useSelector(({ login }) => login.isLogining);
  const user = useSelector(({ login }) => login.user);
  const location = useLocation();
  console.log(user)

   if (isLogining) {
    return (
      <Spin tip="登录中..." style={{ display: 'block', marginTop: 100 }}></Spin>
    )
  }

  if (!localStorage.getItem("token")) {
    const target = `${location.pathname}${location.search}`;
    let path = '/login';
    if (target !== '/') {
      path = `${path}?target=${encodeURIComponent(target)}`;
    }
    return <Redirect to={path}></Redirect>
  }
  return (
    <Layout style={layout}>
      <Sider></Sider>
      <Layout style={main}>
        <Head></Head>
        <Content></Content>
      </Layout>
    </Layout>
  )
}

const layout = {
  display: "flex",
  height: "100%"
}


const main = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minWidth: "1040px",
}

export default LayoutMain;
