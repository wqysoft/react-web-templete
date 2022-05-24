import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.scss'
import { Menu, Dropdown } from 'antd'
import { routerConfig } from '@/routerConfig'
import icon from '@/images/icon.png'
import { DownOutlined } from '@ant-design/icons'

const menu = (
  <Menu>
    <Menu.Item>我的信息</Menu.Item>
    <Menu.Item>关于</Menu.Item>
    <Menu.Item danger>退出</Menu.Item>
  </Menu>
)

const Header = () => {
  const location = useLocation()
  const [defaultOpenKeys] = useState(() => {
    return routerConfig.reduce((acc, item, index) => {
      if (!item.children) {
        return acc
      }
      item.children.forEach((subItem) => {
        if (subItem.path === location.pathname) {
          acc.push(`${index}`)
        }
      })
      return acc
    }, [])
  })

  const renderMenus = (list) =>
    list.reduce((acc, item, index) => {
      if (item.children === void 0) {
        acc.push(
          <Menu.Item key={item.path} icon={item.icon}>
            <Link to={item.path}>{item.name}</Link>
          </Menu.Item>
        )
        return acc
      }

      acc.push(
        <Menu.SubMenu
          key={`${index}`}
          icon={item.icon}
          title={<span>{item.name}</span>}
        >
          {renderMenus(item.children)}
        </Menu.SubMenu>
      )
      return acc
    }, [])

  return (
    <header className={styles.header}>
      <Menu
        className={styles.menu}
        mode="horizontal"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[location.pathname]}
        style={{ lineHeight: '64px' }}
      >
        <img className={styles.logo} src={icon} alt="icon" />
        {renderMenus(routerConfig)}
      </Menu>
      <div className={styles.personal}>
        <Dropdown overlay={menu}>
          <div className="ant-dropdown-link center">
            个人中心 <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
