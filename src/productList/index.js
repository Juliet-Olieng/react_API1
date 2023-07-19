// import React,{useState,useEffect} from "react"
// import './style.css'
// const Product =()=>{
//     const [product,setProducts]=useState([]);
//     const [loading,setLoading]=useState(false)
//     useEffect(()=>{
//         (async()=>{
//             await getProduct()
//         })();
//     }, [])

//     const getProduct=async()=>{
//         try{
//             setLoading(true)
//             const response=await fetch('https://dummyjson.com/products')
//             const result=await response.json();
//             setProducts(result.product);
//             setLoading(false)
//         }
//         catch(error){
//             console.log(error.message)
//         }
//     };
//         console.log({product});
//         if(loading){
//             return <p>Loading...</p>
//     }
//     return(
//         <div className="container">
//             {product.map(item=>(
                
//                 <div key={item.id}>
//                     <img src="{item.thumbnail}" alt="{item.name}" />
//                     <h3>{item.title}</h3>
//                     <p>{item.price}</p>
//                     <p>{item.discountPercentage}</p>
//                 </div>
                
//             ))}
//             </div>
//     )
// };
// export default Product;
import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await getProduct();
    })();
  }, []);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log(result);
      setProducts(result.products);

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log({ products });
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <div className="product">
        {products.map((item) => (
          <Link to={`/details/${item.id}`}>
            <div key={item.id}>
              <img src={`${item.thumbnail}`} alt={`${item.name}`} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>{item.discountPercentage}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Product;
