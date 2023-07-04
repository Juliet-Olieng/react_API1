
import './App.css';
import Login from './LOGIN';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Product from './productList';
import ProductDetails from './productDetails';
import AddProductForm from './form';
import Navbar from './Navbar';

function App() { 
  return (
  <Router>
    <Navbar>
      <Routes>
        <Route path="/productList" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/form" element={<AddProductForm/>}/>
        <Route path="/productDetails" element={<ProductDetails/>}/>
      </Routes>
    </Navbar>
  </Router>
  );
}
export default App;

