import React from 'react';
import {Layout} from 'antd';
import Header from './Header';
import Content from './Content';
import Sider from './Sider';

const LayoutMain = () => {

  return (
    <Layout style={layout}>
      <Header></Header>
      <Layout style={main}>
        <Sider></Sider>
        <Content></Content>
      </Layout>
    </Layout>
  )
}

const layout = {
  display: "flex",
  height: '100%'
}


const main = {
  flex: 1,
  display: "flex",
  flexDirection: 'row'
}

export default LayoutMain;
