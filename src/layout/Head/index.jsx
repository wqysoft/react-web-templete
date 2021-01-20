import React from 'react';
import styles from './index.module.scss';
import { Menu, Dropdown, Avatar } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      我的信息
    </Menu.Item>
    <Menu.Item>
      关于
    </Menu.Item>
    <Menu.Item danger>退出</Menu.Item>
  </Menu>
);

const Head = () => {
  return (
    <header className={styles.header}>
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