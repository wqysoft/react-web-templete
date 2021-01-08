import React, {Component} from 'react';
import styles from './index.module.scss';
import {Menu, Dropdown} from 'antd';
import {routerConfig} from '@/routerConfig';
import icon from '@/images/icon.png';
import {Link} from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

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

class Header extends Component {

  render() {
    return (
      <header className={styles.header}>
        <Menu className={styles.menu} mode="horizontal"
              style={{lineHeight: '64px'}}>
          <img className={styles.logo} src={icon} alt="icon"/>
          {routerConfig.map(item => {
            return (
              <Menu.Item key={item.path} icon={item.icon}>
                <Link to={item.path}>
              {item.name}
            </Link>
              </Menu.Item>
            )
          })}
        </Menu>
        <div className={styles.personal}>
          <Dropdown overlay={menu}>
            <div className="ant-dropdown-link center">
              个人中心 <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </header>
    );
  }
}

export default Header;