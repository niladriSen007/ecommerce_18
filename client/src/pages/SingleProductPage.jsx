import axios from "axios";
import React, { useEffect, useState } from "react";
const REACT_APP_API = "http://localhost:5000";
import { useParams } from "react-router-dom";
import {CiDeliveryTruck} from "react-icons/ci"

const SingleProductPage = () => {
  const { id: prodId } = useParams();

  const [singleProd, setSingleProd] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    photo: "",
    shipping: 0,
  });

  const fetchSingleProduct = async () => {
    const { data } = await axios.get(
      `${REACT_APP_API}/admin/products/getSingleProduct/${prodId}`
    );
    setSingleProd((prev) => ({
      ...prev,
      name: data.product.name,
      description: data.product.description,
      quantity: data.product.quantity,
      category: data.product.category,
      price: data.product.price,
      shipping: data.product.shipping,
    }));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <div className="w-[92vw] rounded overflow-hidden shadow-lg m-4 flex justify-between items-start px-48 h-screen mt-16">
      {/* Product Photo */}
      <img
        className=" h-[40vh] w-[36vw] object-contain"
        src={`${REACT_APP_API}/admin/products/getProductPhoto/${prodId}`}
        alt="Product"
      />

      <div className="px-6 py-4">
        {/* Product Name */}
        <div className="font-bold text-4xl mb-2">{singleProd.name}</div>

        {/* Product Description */}
        <p className="text-gray-700 text-xl ">{singleProd.description}</p>

        {/* Product Category */}
        <p className="text-gray-600 text-sm font-bold">{singleProd.category.name}</p>

        <span>4.1⭐ | 3345 Ratings</span>

        {/* Product Price */}
        <p className="font-bold text-xl mt-2 ">₹{singleProd.price} {"  "}MRP <span className=" line-through  font-thin pl-2">₹{singleProd.price+500}</span> <span className=" text-orange-600 font-extralight pl-2">(23% off)</span></p>
        <p className="text-green-600 font-semibold">inclusive of all taxes</p>
        <div className="flex flex-col gap-3 my-4">
            <p className="">SELECT SIZE <span className="text-indigo-600 text-xs pl-2 font-bold">SIZE CHART {">"} </span></p>
            <div className="flex gap-4">
                <p className="border-2 rounded-full border-gray-400 cursor-pointer  w-10 h-10 flex items-center justify-center " >S</p>
                <p className="border-2 rounded-full border-gray-400 cursor-pointer  w-10 h-10 flex items-center justify-center " >M</p>
                <p className="border-2 rounded-full border-gray-400 cursor-pointer  w-10 h-10 flex items-center justify-center " >L</p>
                <p className="border-2 rounded-full border-gray-400  cursor-pointer w-10 h-10 flex items-center justify-center " >XL</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold">DELIVERY OPTIONS</p>
              <CiDeliveryTruck size={24}/>
            </div>
            <div className="flex items-center gap-2">
            <input type="text" placeholder="Enter Pincode" className="border-2 border-gray-400 rounded-sm pl-1"/>
            <span className="text-pink-600">CHECK</span>
            </div>
            <p className="text-xs">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            <ul className="list-disc pl-4">
              <li>100% Original Products</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 14 days returns and exchanges</li>
              <li>Try & Buy might be available</li>
            </ul>
            <p className="font-bold mt-3"> BEST OFFERS </p>
            <p>Best Price: <span className="text-orange-600 font-bold">Rs. {singleProd.price - 120}</span></p>
            <ul className="list-disc pl-4">
              <li>Applicable on: Orders above Rs. 999 (only on first purchase)</li>
              <li>Coupon code: <span className="font-extrabold">IC200</span></li>
              <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
            </ul>
            <p className="font-bold text-xl">EMI option available</p>
            <ul className="list-disc pl-4">
              <li>EMI starting from Rs.{Math.floor(singleProd.price / 6)}/month</li>
            </ul>
        </div>
        <div className=" py-4 flex gap-4">
          {/* Add to Cart Button */}
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 mr-2 rounded w-32 transform-all duration-300"
            onClick={() => alert("Added to cart!")}
          >
            Add to Cart
          </button>

          {/* Buy Now Button */}
          <button
            className="border-green-600 border-2 text-green-600 hover:text-white hover:bg-green-600 transition-all duration-300 font-bold py-2 px-4 rounded w-32"
            onClick={() => alert("Proceed to checkout!")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;