
import './App.css';
import Login from './LOGIN';
import React, { useState } from 'react';
// import AddProductForm from './AddProductForm';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import Product from './productList';
import ProductDetails from './productDetails';
import AddProductForm from './form';

function App() {

  
  return (
    <div>
   <Product/>
   <Login/>
   <ProductDetails />
   <AddProductForm/>

    </div>
  );
}

export default App;
