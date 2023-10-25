import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import PageFooter from '~/layouts/Admin/Footer'
import SideBar from '~/layouts/Admin/SideBar'
import PageHeader from '~/layouts/Admin/Header'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const DashBoard: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        {/* Header */}
        <PageHeader />

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
            {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>DuogBachNek</div>
        </Content>

        {/* Footer */}
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default DashBoard
