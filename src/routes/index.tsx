import App from "@/App";
import AboutUsPage from "@/pages/AboutUs/AboutUsPage";
import AllProductsPage from "@/pages/AllProducts/AllProductsPage";
import HomePage from "@/pages/Home/HomePage";
import ManageProductsPage from "@/pages/ManageProducts/ManageProductsPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "manage-products",
        element: <ManageProductsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/all-products",
        element: <AllProductsPage />,
      },
    ],
  },
]);
export default router;
