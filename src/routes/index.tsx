import App from "@/App";
import AboutUsPage from "@/pages/AboutUs/AboutUsPage";
import AllProductsPage from "@/pages/AllProducts/AllProductsPage";
import CartPage from "@/pages/Cart/CartPage";
import CheckoutPage from "@/pages/Checkout/CheckoutPage";
import CreateProductPage from "@/pages/CreateProduct/CreateProductPage";
import ErrorPage from "@/pages/Error/ErrorPage";
import HomePage from "@/pages/Home/HomePage";
import ManageProductsPage from "@/pages/ManageProducts/ManageProductsPage";
import SingleProductPage from "@/pages/SingleProduct/SingleProductPage";
import UpdateProductPage from "@/pages/UpdateProduct/UpdateProductPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "all-products",
        element: <AllProductsPage />,
      },
      {
        path: "create-product",
        element: <CreateProductPage />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProductPage />,
      },
      {
        path: "single-product/:id",
        element: <SingleProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path:'checkout',
        element:<CheckoutPage/>
      },
      // {
      //   path:'stripe-payment',
      //   element:<StripePaymentPage/>
      // }
    ],
  },
]);
export default router;
