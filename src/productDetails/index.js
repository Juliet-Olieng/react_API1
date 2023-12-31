import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  let { productId } = useParams();

  useEffect(() => {
    (async () => {
      await getProductDetail();
    })();
    
  }, []);

  const getProductDetail = async () => {
    console.log(productId);
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const result = await response.json();

      setProducts([result]);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    console.log("loading..");
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="product">
        {products &&
          products.map((item) => (
            <div key={item.id}>
              <img src={`${item.thumbnail}`} alt={`${item.name}`} />
              <h3>{item.title}</h3>
              <p>description:{item.description}</p>
            
            </div>
          ))}
      </div>
    </div>
  );
};
export default ProductDetails;
