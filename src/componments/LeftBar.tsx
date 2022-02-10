import React, { Component } from 'react'
import router, { IRouter } from '../router'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { SubMenu } = Menu
const { Sider } = Layout

class LeftBar extends Component<any, any> {
  generateMenu = (routerList: IRouter[]) => {
    return (
      <>
        {routerList?.map((r) => {
          if (r.children) {
            return (
              <SubMenu key={r.key} icon={r.icon} title={r.title}>
                {this.generateMenu(r.children)}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={r.key} icon={r.icon}>
                <Link to={r.path}>{r.title}</Link>
              </Menu.Item>
            )
          }
        })}
      </>
    )
  }

  render() {
    return (
      <>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {this.generateMenu(router)}
          </Menu>
        </Sider>
      </>
    )
  }
}

export default LeftBar
