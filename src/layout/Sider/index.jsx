import React, { useState } from 'react'
import styles from './index.module.scss'
import { Menu, Layout } from 'antd'
import { routerConfig } from '@/routerConfig'
import { Link, useLocation } from 'react-router-dom'
import logo from '@/images/logo.png'

const Aside = () => {
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
    <Layout.Sider className={styles.sider} width={240}>
      <Menu
        className={styles.menu}
        mode="inline"
        theme="dark"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[location.pathname]}
      >
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h3>系统平台</h3>
        </div>
        {renderMenus(routerConfig)}
      </Menu>
    </Layout.Sider>
  )
}

export default Aside
