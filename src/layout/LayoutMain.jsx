import React from 'react';
import { Layout } from 'antd';
import Head from './Head';
import Content from './Content';
import Sider from './Sider';

const LayoutMain = () => {

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
