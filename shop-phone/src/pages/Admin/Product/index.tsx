import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import PpriceFooter from '~/layouts/Admin/Footer'
import SideBar from '~/layouts/Admin/SideBar'
import PpriceHeader from '~/layouts/Admin/Header'
import { Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/es/table'

interface DataType {
  key: React.Key
  name: string
  code: string
  price: number
  image: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Code Product',
    dataIndex: 'code'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: 'Image',
    dataIndex: 'image',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    onFilter: (value: string, record) => record.image.indexOf(value) === 0
  },
  {
    title: 'Price',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price
  }
]

const data = [
  {
    key: '1',
    code: 'MaSP01',
    name: 'John Brown',
    price: 32,
    image: 'image 1'
  },
  {
    key: '2',
    code: 'MaSP01',
    name: 'Jim Green',
    price: 42,
    image: 'image 2'
  },
  {
    key: '3',
    code: 'MaSP01',
    name: 'Joe Black',
    price: 32,
    image: 'image 3'
  },
  {
    key: '4',
    code: 'MaSP01',
    name: 'Jim Red',
    price: 32,
    image: 'image 4'
  },
  {
    key: '5',
    code: 'MaSP01',
    name: 'Jim Red',
    price: 32,
    image: 'image 5'
  }
]

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}
const { Content } = Layout

const ProductList = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        {/* Header */}
        <PpriceHeader />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Table columns={columns} dataSource={data} onChange={onChange} />;
          </div>
        </Content>

        {/* Footer */}
        <PpriceFooter />
      </Layout>
    </Layout>
  )
}

export default ProductList
