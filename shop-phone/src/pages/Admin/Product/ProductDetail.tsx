import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import PageFooter from '~/layouts/Admin/Footer'
import SideBar from '~/layouts/Admin/SideBar'
import PageHeader from '~/layouts/Admin/Header'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const ProductDetail: React.FC = () => {
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
            <Breadcrumb.Item>Product Details</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Image
              </label>
              <img
                className='py-1 px-2 border'
                src='https://shopdunk.com/images/thumbs/0019796_black_550.jpeg'
                alt=''
              />
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Name
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>Iphone 14</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Company
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>Samsung</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Price
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>3.490.000 đ</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Star
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>3</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Rate Count
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>26</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Promo
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>Trả góp</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Screen
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>IPS LCD, 6.0', HD+</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                OS
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>Android 8.1 (Oreo)</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Camara
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>13 MP</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Camara Front
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>5 MP</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                CPU
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>Qualcomm Snapdragon 425 4 nhân 64-bit</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Ram
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>2 GB</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Rom
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>16 GB</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Micro USB
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>MicroSD, hỗ trợ tối đa 256 GB</label>
            </div>
            <div className='flex gap-5 mx-auto font-semibold mb-5'>
              <label className='basis-2/6 text-right uppercase px-2 py-1' htmlFor=''>
                Battery
              </label>
              <label className='py-1 px-2 text-left basis-4/6'>3300 mAh</label>
            </div>
          </div>
        </Content>

        {/* Footer */}
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default ProductDetail
