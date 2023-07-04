
import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/productList">Product</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/productDetails">ProductDetails</Link>
        </li>
        <li>
          <Link to="/addProductForm">AddProductForm</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
