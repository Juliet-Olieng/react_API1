import React,{useState,useEffect} from "react"
import './style.css'
import { useParams } from "react-router-dom";
const ProductDetails =()=>{
    const [products,setProducts]=useState();
    const [loading,setLoading]=useState(false)
    const{productId}=useParams
    useEffect(()=>{
        (async()=>{
            await getProductDetail()
        })();
    }, [])

    const getProductDetail=async()=>{
        try{
            setLoading(true)
            const response=await fetch(`https://dummyjson.com/product/${productId}`)
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
            {products.map((item)=>(
                
                <div key={item.id}>
                    <img src="{item.thumbnail}" alt="m,{item.name}" />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.discountPercentage}</p>
                    <p>{item.band}</p>
                    <p>{item.rating}</p>
                    <p>{item.stock}</p>
                </div>
                
            ))}
            </div>
        </div>
    )
}
export default ProductDetails;