
import './App.css';
import Login from './LOGIN';
import React, { useState } from 'react';
// import AddProductForm from './AddProductForm';
import { BrowserRouter as Route, Router,Routes } from 'react-router-dom';

// import ProductDetails from "./productDetails";

import Product from './productList';
import ProductDetails from './productDetails';
import AddProductForm from './form';
import Navbar from './Navbar';

function App() { 
  return (
  <Router>
    <Navbar>
      <Routes>
        <Route path="./productList" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Login" element={<AddProductForm/>}/>
        {/* <Route path="/productDetails" element={<ProductDetails/>}/> */}
      </Routes>
    </Navbar>
  </Router>
  );
}
export default App;

