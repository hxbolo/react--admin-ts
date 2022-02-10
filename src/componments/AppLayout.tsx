import React, { Component } from 'react'
import { Layout } from 'antd'
import LeftBar from './LeftBar'
import SubTitle from './SubTitle'
const { Content } = Layout

class AppLayout extends Component<any, any> {
  render() {
    return (
      <Layout>
        <Layout>
          <LeftBar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <SubTitle />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default AppLayout
