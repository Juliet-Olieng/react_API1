// import React, { useState } from "react";
// import './style.css';
// const AddProductForm =() =>{
//     const[name,setName]=useState('');
//     const[price,setPrice]=useState('');
//     console.log(name)
//     console.log(price)
//     const handleSubmit =async(e)=>{
//         e.preventDefault();
//         const data ={
//             name:name,
//             price:price
//         }
//         console.log({data})
//         try{
//             const response =await fetch('https://dummyjson.com/auth/login',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json',
//             },
//             body:JSON.stringify(data)

//         })
//         const result= await response.json();
//         console.log(result)

//         }
//         catch(error){
//             console.log(error.message)
//         }
//     }
        
    
//     return(
//         <div>
//             <form className="form" onSubmit={handleSubmit}>
//                 <h1>Login</h1>
//                 <input placeholder="Enter Username" type="text"
//                 onChange={(e)=>setName(e.target.value)}/>
                
//                 <br/>
//                 <br/>
//                 <input placeholder="Enter Password" type="password"
//                 onChange={(e)=> setPrice(e.target.value)}/>

//                 <br/>
//                 <br/>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     )
// }
// export default AddProductForm


import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Please enter product name and price');
      return;
    }
    onAddProduct({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="price">Product Price:</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
