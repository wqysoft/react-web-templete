import React from 'react';
import {
  CalendarOutlined,
  DesktopOutlined,
  InboxOutlined,
  UserOutlined,
  BookOutlined,
  LineChartOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import Monitor from '@/pages/Monitor';
import StatisticQuery from '@/pages/StatisticQuery';
import MaintainTask from '@/pages/MaintainTask';
import CardUserManage from '@/pages/CardUserManage';
import ResourceManage from '@/pages/ResourceManage';
import ErrorMaintain from '@/pages/ErrorMaintain';
import UserManage from '@/pages/UserManage';
import Security from '@/pages/Security';
import { createHashHistory } from 'history';

export const history = createHashHistory();
export const routerConfig = [
  {
    name: '实时监控',
    icon: <DesktopOutlined />,
    path: '/monitor',
    component: Monitor,
  },
  {
    name: '资源管理',
    icon: <BookOutlined/>,
    path: '/resourceManage',
    component: ResourceManage,
  },
  {
    name: '维护作业',
    icon: <LineChartOutlined />,
    children: [
      {
        name: '日常维护作业',
        path: '/maintainTask',
        component: MaintainTask,
      },
      {
        name: '故障维护处理',
        path: '/errorMaintain',
        component: ErrorMaintain,
      }
    ]
  },
  {
    name: '安全隐患',
    icon: <CalendarOutlined/>,
    path: '/security',
    component: Security,
  },
  {
    name: '门禁管理',
    icon: <InboxOutlined/>,
    children: [
      {
        name: '人员管理',
        path: '/cardUserManage',
        component: CardUserManage,
      },
      {
        name: '卡片管理',
        path: '/cardManage',
        component: CardUserManage,
      },
      {
        name: '部门管理',
        path: '/areaManage',
        component: CardUserManage,
      }
    ]
  },
  {
    name: '统计报表',
    icon: <BarChartOutlined />,
    path: '/statisticQuery',
    component: StatisticQuery,
  },
  {
    name: '用户管理',
    icon: <UserOutlined/>,
    path: '/userManage',
    component: UserManage,
  },
];