// import React from "react";
// import './style.css'

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//         <ul className="nav-links">
//           <li><a href="#productList">Product</a></li>
//           <li><a href="/login">Login</a></li>
//           <li><a href="#ABOUT">productDetails</a></li>
//           <li><a href="#form">AddProductForm</a></li>
//         </ul>
//       </nav>
      
//     );
//   }
//   export default Navbar
import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/product">Product</Link>
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
