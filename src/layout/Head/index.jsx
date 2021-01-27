import React from 'react'
import styles from './index.module.scss'
import { Menu, Dropdown, Avatar, Icon } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'

const Head = () => {
  const history = useHistory()
  const location = useLocation()

  const loginOutClick = () => {
    const target = `${location.pathname}${location.search}`
      let path = '/login'
      if (target !== '/') {
        path = `${path}?target=${encodeURIComponent(target)}`
      }
      history.replace(path)
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

  const cities = (
    <Menu>
      <Menu.Item>杭州市</Menu.Item>
      <Menu.Item>宁波市</Menu.Item>
      <Menu.Item>绍兴市</Menu.Item>
    </Menu>
  )

  return (
    <header className={styles.header}>
      <div className={styles.header_current}>
        <span>当前位置：</span>
        <Dropdown overlay={cities}>
          <span>
            浙江省<Icon type="down" />
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