import React, { useState } from 'react';
import styles from './index.module.scss';
import { Menu, Dropdown, Avatar } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

const Head = () => {
  const history = useHistory();
  const location = useLocation();
  const [selectedProvice, setSelectedProvice] = useState('浙江省');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedStation, setSelectedStation] = useState('');

  const loginOutClick = () => {
    const target = `${location.pathname}${location.search}`;
      let path = '/login';
      if (target !== '/') {
        path = `${path}?target=${encodeURIComponent(target)}`;
      }
      history.replace(path);
  }

  const menu = (
    <Menu>
      <Menu.Item>
        我的信息
      </Menu.Item>
      <Menu.Item>
        关于
      </Menu.Item>
      <Menu.Item danger onClick={loginOutClick}>退出</Menu.Item>
    </Menu>
  )
  const provide = [
    {id: 1, name: '浙江省'},
    {id: 2, name: '江西省'},
  ]
  const city = [
    {id: 1, name: '杭州市'},
    {id: 2, name: '宁波市'},
    {id: 3, name: '绍兴市'},
  ]
  const town = [
    {id: 1, name: '江干区'},
    {id: 2, name: '萧山区'},
    {id: 3, name: '余杭区'},
  ]
  const station = [
    {id: 1, name: '数据机房'},
    {id: 2, name: '测试机房'},
    {id: 3, name: '实践机房'},
  ]
  const provides = (
    <Menu>
      {provide.map(item => <Menu.Item
        key={item.id}
        onClick={()=> {
          setSelectedProvice(item.name);
          setSelectedCity('');
          setSelectedTown('');
          setSelectedStation('');
        }}
      >{item.name}</Menu.Item>)}
    </Menu>
  )
  const cities = (
    <Menu>
      {city.map(item => <Menu.Item
        key={item.id}
        onClick={()=> {
          setSelectedCity(item.name);
          setSelectedTown('');
          setSelectedStation('');
        }}
      >{item.name}</Menu.Item>)}
    </Menu>
  )
  const towns = (
    <Menu>
      {town.map(item => <Menu.Item
        key={item.id}
        onClick={()=> {
          setSelectedTown(item.name);
          setSelectedStation('');
        }}
      >{item.name}</Menu.Item>)}
    </Menu>
  )
  const stations = (
    <Menu>
      {station.map(item => <Menu.Item
        key={item.id}
        onClick={()=> setSelectedStation(item.name)}
      >{item.name}</Menu.Item>)}
    </Menu>
  )

  return (
    <header className={styles.header}>
      <div className={styles.header_current}>
        <span>当前位置：</span>
        <Dropdown overlay={provides} className={styles.drop_down}>
          <span>
            <span>{selectedProvice ? selectedProvice : '全部省份'} </span>
            <DownOutlined/>
          </span>
        </Dropdown>
        <Dropdown overlay={cities} className={styles.drop_down}>
          <span>
            <span>{selectedCity ? selectedCity : '全部地市'} </span>
            <DownOutlined/>
          </span>
        </Dropdown>
        <Dropdown overlay={towns} className={styles.drop_down}>
          <span>
            <span>{selectedTown ? selectedTown : '全部区县'} </span>
            <DownOutlined/>
          </span>
        </Dropdown>
        <Dropdown overlay={stations} className={styles.drop_down}>
          <span>
            <span>{selectedStation ? selectedStation : '全部机房'} </span>
            <DownOutlined/>
          </span>
        </Dropdown>
      </div>
      <Dropdown overlay={menu}>
        <div className="ant-dropdown-link center">
          <Avatar />
          <span className={styles.avatar_name}>{'用户名'}</span>
        </div>
      </Dropdown>
    </header>
  );
}

export default Head;