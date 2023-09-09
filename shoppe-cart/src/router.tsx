import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/web/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
