import { createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./page/web/LayoutWebsite";
import SignIn from "./page/sign/SignIn";
import SignUp from "./page/sign/SignUp";
import LayoutAdmin from "./page/admin/LayoutAdmin";
import AddProduct from "./component/admin/product/AddProduct";
import EditProduct from "./component/admin/product/EditProduct";
import AddCategory from "./component/admin/category/AddCategory";
import ListProduct from "./component/admin/product/ListProduct";
import PageNotFound from "./page/404/PageNotFound";
import DashBoard from "./component/admin/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWebsite />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/admin",
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
            index: true,
            element: <DashBoard />,
          },
          {
            path: "category",
            element: <AddCategory />,
          },
          {
            path: "product",
            element: <ListProduct />,
          },
          {
            path: "addproduct",
            element: <AddProduct />,
          },
          {
            path: "product/:id/edit",
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
