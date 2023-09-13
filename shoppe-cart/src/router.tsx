import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/web/HomePage";
import ProductDetail from "./pages/web/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

export default router;
