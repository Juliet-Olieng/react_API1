                
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const[thumbnail,setThumbnail]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price||!thumbnail) {
      alert('Please enter product name and price');
      return;
    }
    onAddProduct({ name, price,thumbnail });
    setName('');
    setPrice('');
    setThumbnail('')
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div className='form'>
    <label htmlFor="thumbnail">Product image:</label>
    <input type='text' id='thumbnail' value={thumbnail}
    onChange={(e)=>setThumbnail(e.target.value)}/>

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
      </div>
    </form>
    
  );
};

export default AddProductForm;
