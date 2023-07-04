import "./App.css";
import Login from "./LOGIN";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Product from "./productList";
import ProductDetails from "./productDetails";
import AddProductForm from "./form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Product />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "details/:productId",
      element: <ProductDetails />,
    },
    {
      path: "add",
      element: <AddProductForm />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
