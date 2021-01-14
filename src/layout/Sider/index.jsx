import React, { useState } from 'react';
import styles from './index.module.scss';
import { Menu } from 'antd';
import { routerConfig } from '@/routerConfig';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Aside = () => {
  const location = useLocation();
  const [defaultOpenKeys] = useState(() => {
    return routerConfig.reduce((acc, item, index) => {
      if (!item.children) {
        return acc
      }
      item.children.forEach(subItem => {
        if (subItem.path === location.pathname) {
          acc.push(`${index}`)
        }
      })
      return acc
    }, [])
  })
  const [collapsed, setCollapsed] = useState(false);
  const renderMenus = list =>
    list.reduce((acc, item, index) => {
      if (item.children === void 0) {
        acc.push(
          <Menu.Item key={item.path} icon={item.icon}>
            <Link to={item.path}>
              {item.name}
            </Link>
          </Menu.Item>
        )
        return acc;
      }

      acc.push(
        <Menu.SubMenu key={`${index}`} icon={item.icon}
          title={<span>{item.name}</span>}
        >
          {renderMenus(item.children)}
        </Menu.SubMenu>,
      )
      return acc
    }, [])

    return (
      <Menu
        className={styles.menu}
        inlineCollapsed={collapsed}
        mode="inline"
        style={{width: !collapsed ? 200 : null}}
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[location.pathname]}
        >
        {renderMenus(routerConfig)}
        <div onClick={() => { setCollapsed(!collapsed) }} className={styles.collapsed}>
          {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </div>
      </Menu>
    );
  }

export default Aside;


