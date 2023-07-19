import "./App.css";
import Login from "./LOGIN";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Product from "./productList";
import ProductDetails from "./productDetails";
import AddProductForm from "./form";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Product />,
//     },
//     {
//       path: "login",
//       element: <Login />,
//     },
//     {
//       path: "details/:productId",
//       element: <ProductDetails />,
//     },
//     {
//       path: "add",
//       element: <AddProductForm />,
//     },
//   ]);
//   return <RouterProvider router={router}></RouterProvider>;
// }
const App = () =>{
  return (
   <Router>
    <div className= 'navbar'>
      <nav className='nav'>
        <ul >
          <li> <Link to = "/LOGIN" > Login</Link> </li>
        </ul>
        <ul >
          <li> <Link to = "/productList" > Product</Link> </li>
        </ul>
      </nav>
    </div>
    <Routes>
      <Route path = "/LOGIN" element = {<Login/>} />
      <Route path = "/ProductList" element = {<Product/>} />
      <Route path= "details/:productId" element={<ProductDetails/>} />
      <Route path="*" element={<Navigate to="/Login" />} />
    </Routes>
   </Router>
  );
};

export default App;
