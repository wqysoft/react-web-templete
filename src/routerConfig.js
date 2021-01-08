import React from 'react'
import {
  TeamOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  AlignLeftOutlined,
  InboxOutlined,
  UserOutlined,
  BookOutlined,
} from '@ant-design/icons';
import Home from '@/pages/Home';
import Base from '@/pages/Base';
import Course from '@/pages/Course';
import Student from '@/pages/Student';
import Passport from '@/pages/Passport';
import Account from '@/pages/Account';
import CourseListPage from '@/pages/CourseListPage';
import { createHashHistory } from 'history';

export const history = createHashHistory();
export const routerConfig = [
  {
    name: '首页',
    icon: <TeamOutlined></TeamOutlined>,
    path: '/home',
    component: Home,
  },
  {
    name: '学员列表',
    icon: <UserOutlined></UserOutlined>,
    path: '/student',
    component: Student,
    children: [
      {
        name: '学员列表',
        icon: <UserOutlined></UserOutlined>,
        path: '/student',
        component: Student,
      },
      {
        name: '学员列表',
        icon: <UserOutlined></UserOutlined>,
        path: '/student',
        component: Student,
      }
    ]
  },
  {
    name: '护照管理',
    icon: <BookOutlined></BookOutlined>,
    path: '/passport',
    component: Passport,
  },
  {
    name: '课程列表',
    icon: <AlignLeftOutlined></AlignLeftOutlined>,
    path: '/course',
    component: Course,
  },
  {
    name: '课程管理',
    icon: <CalendarOutlined></CalendarOutlined>,
    path: '/courseRecord',
    component: CourseListPage,
  },
  {
    name: '基地管理',
    icon: <EnvironmentOutlined></EnvironmentOutlined>,
    path: '/base',
    component: Base,
  },
  {
    name: '账号管理',
    icon: <InboxOutlined></InboxOutlined>,
    path: '/account',
    component: Account,
  },
]
