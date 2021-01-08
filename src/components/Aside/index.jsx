import React, { useState } from 'react';
import styles from './index.module.scss';
import { Menu } from 'antd';
import { routerConfig } from '@/routerConfig';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Aside = () => {
  const [collapsed, setCollapsed] = useState(false);
  const renderMenus = list =>
    list.reduce((acc, item, index) => {
      if (item.children === void 0) {
        acc.push(
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.name}
            </Link>
          </Menu.Item>
        )
        return acc;
      }

      acc.push(
        <Menu.SubMenu key={`${index}`}
          title={<span>{item.name}</span>}
        >
          {renderMenus(item.children)}
        </Menu.SubMenu>,
      )
      return acc
    }, [])

    return (
      <div className={styles.aside}>
        <Menu className={styles.menu} inlineCollapsed={collapsed}>
          {renderMenus(routerConfig)}
          <div onClick={() => { setCollapsed(!collapsed) }} className={styles.collapsed}>
            {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
          </div>
        </Menu>
      </div>
    );
  }

export default Aside;


