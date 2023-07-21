import React from "react";
const REACT_APP_API = "http://localhost:5000";
const NewCard = ({ singleProd }) => {
  const { name, description, price, quantity, shipping, category, _id } =
    singleProd;
  console.log(singleProd);
  return (
    <div className="bg-white w-60 h-[430px] rounded-lg shadow-md overflow-hidden transform transition duration-300  cursor-pointer border-2 border-gray-300 flex flex-col items-center">
      <img
        src={`${REACT_APP_API}/admin/products/getProductPhoto/${_id}`}
        className="w-56 h-60 object-cover hover:scale-105 transition-all duration-300 relative"
        alt={name}
      />
      <div className="absolute bottom-4">
        <button className="bg-indigo-700 text-white w-52 rounded-md p-2">View Details</button>
      </div>
      <div className="p-3 w-56 flex flex-col gap-1 ">
        <h3 className="text-lg font-semibold ">{name}</h3>
        <p className="text-gray-600 ">{description.substring(0,6)}</p>
        <p className="text-green-600 font-bold">Rs. {price} <span className=" line-through text-gray-400">{price + 500}</span> <span className="text-red-500">{Math.round(500/100)} % off</span></p>
      </div>
      {/* <button className="bg-indigo-700 text-white p-2 rounded-md my-2">
        Add To Cart
      </button> */}
    </div>
  );
};

export default NewCard;
