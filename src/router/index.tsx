import React, { ReactNode, lazy } from 'react'
import { UserOutlined, MenuOutlined } from '@ant-design/icons'
const Index = lazy(() => import('../view/Index'))
const Login = lazy(() => import('../view/Login'))
const Page404 = lazy(() => import('../view/Page404'))
const User = lazy(() => import('../view/User'))

export interface IRouter {
  title: string
  path: string
  key: string
  exact?: boolean // 精确匹配
  icon?: ReactNode
  component?: ReactNode
  children?: IRouter[]
}

export const unAuthRouter: IRouter[] = [
  {
    path: '/login',
    title: '登录',
    key: 'login',
    exact: true,
    component: <Login />,
  },
  {
    path: '*',
    title: '404',
    key: '404',
    component: <Page404 />,
  },
]

const router: IRouter[] = [
  {
    path: '/admin/index',
    title: '首页',
    key: 'index',
    exact: true,
    icon: <MenuOutlined />,
    component: <Index />,
  },
  {
    path: '/admin/user',
    title: '用户管理',
    key: 'user',
    icon: <UserOutlined />,
    exact: true,
    component: <User />,
    children: [
      {
        path: '/admin/user/list',
        title: '用户列表',
        key: 'userList',
        icon: <UserOutlined />,
        exact: true,
        component: <User />,
      },
    ],
  },
]
export default router
