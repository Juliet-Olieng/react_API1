import React,{useState,useEffect} from "react"
import './style.css'
// import { Link } from "react-router-dom";
const Product =()=>{
    const [product,setProducts]=useState([]);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProduct()
        })();
    }, [])

    const getProduct=async()=>{
        try{
            setLoading(true)
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json();
            setProducts(result.product);
            setLoading(false)
        }
        catch(error){
            console.log(error.message)
        }
    };
        console.log({product});
        if(loading){
            return <p>Loading...</p>
    }
    return(
        <div className="container">
{/*             
            <button><a href="#Home">Add Home</a></button> */}
            
            {/* <Link to ={`./product/${item.id}`} key={item.id}/> */}
            {product.map(item=>(
                
                <div key={item.id}>
                    <img src="{item.thumbnail}" alt="{item.name}" />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}</p>
                </div>
                
            ))}
            </div>
    )
};
export default Product;