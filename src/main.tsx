import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
// import { Toaster } from "./components/ui/sonner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      {/* <Toaster  className=" z-50 bg-white  " /> */}
    </Provider>
  </React.StrictMode>
);
