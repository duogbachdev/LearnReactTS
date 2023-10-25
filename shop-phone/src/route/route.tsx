import { createBrowserRouter } from 'react-router-dom'
import PageNotFound from '~/pages/404/PageNotFound'
import Category from '~/pages/Admin/Category'
import DashBoard from '~/pages/Admin/Dashboard'
import ProductList from '~/pages/Admin/Product'
import ProductCreate from '~/pages/Admin/Product/ProductCreate'
import ProductDetail from '~/pages/Admin/Product/ProductDetail'
import ProductEdit from '~/pages/Admin/Product/ProductEdit'

const router = createBrowserRouter([
  {
    path: '*',
    element: <PageNotFound />
  },

  {
    path: '/admin',
    children: [
      {
        index: true,
        element: <DashBoard />
      },
      {
        path: 'category',
        element: <Category />
      },
      {
        path: 'product',
        children: [
          {
            index: true,
            element: <ProductList />
          },
          {
            path: 'create',
            element: <ProductCreate />
          },
          {
            path: 'edit',
            element: <ProductEdit />
          },
          {
            path: 'details',
            element: <ProductDetail />
          },
          {
            path: 'destroy',
            element: <p>Destroy Success</p>
          }
        ]
      }
    ]
  }
])

export default router
