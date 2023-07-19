import React from 'react';
import  './NewCard.css'
const REACT_APP_API = "http://localhost:5000";
const NewCard = ({singleProd}) => {

    const {name,description,price,quantity,shipping,category,_id} = singleProd
    console.log(singleProd)
  return (
    <div className = "container cursor-pointer">
    <div className = "card">
      <div className = "image flex items-center justify-center">
        <img href = "#" src ={`${REACT_APP_API}/admin/products/getProductPhoto/${_id}`} className='w-48 h-48 object-cover' />
      </div>
      <div className = "content ">
        <h3 className='text-indigo-700 text-lg font-semibold'>Name : {name}</h3>
        <p className='text-indigo-700 text-lg font-semibold'>description : {description}</p>
        <p className='text-indigo-700 text-lg font-semibold'>price : {price}</p>
        <p className='text-indigo-700 text-lg font-semibold'>quantity : {quantity}</p>
      <button className="bg-indigo-700 text-white p-2 rounded-md my-2">Add To Cart</button>
      </div>
    </div>    
  </div>
  );
};

export default NewCard;
