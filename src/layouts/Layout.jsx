import React from 'react';
import {Layout} from 'antd';
import Header from '@/components/Header';
import MainLayout from './MainLayout';
import Aside from '@/components/Aside';

const Layouts = () => {

  return (
    <Layout style={layout}>
      <Header></Header>
      <Layout style={main}>
        <Aside></Aside>
        <MainLayout></MainLayout>
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

export default Layouts;
