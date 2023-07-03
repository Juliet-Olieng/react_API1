import React,{useState,useEffect} from "react"
import './style.css'
// import { Link } from "react-router-dom";
const Product =()=>{
    const [products,setProducts]=useState([]);
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
            setProducts(result.products);
            setLoading(false)
        }
        catch(error){
            console.log(error.message)
        }
    };
        console.log({products});
        if(loading){
            return <p>Loading...</p>
    }
    return(
        <div className="container">
            
            <button><a href="#Home">Add Home</a></button>
            <div className="product">
            {products.map(item=>(
                // <Link to ={`./product/${item.id}`} key={item.id}/>
                <div key={item.id}>
                    <img src="{item.thumbnail}" alt="{item.name}" />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}</p>
                </div>
                
            ))}
            </div>
        </div>
    )
}
export default Product