import axios from "axios";
import React from "react";
const REACT_APP_API = "http://localhost:5000";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import AdminUpdateProduct from "./AdminUpdateProduct";
import { GiCrossMark } from "react-icons/gi";
import { toast } from "react-toastify";

const AdminProductCard = ({
  singleProd,
  setShowUpdateProduct,
  showUpdateProduct,
  onClickEdit,
  deleteProduct
}) => {
  const { name, description, price, quantity, shipping, category, _id, slug } =
    singleProd;

  // console.log(singleProd);

  const handleClickEdit = () =>{
    onClickEdit(_id)
    setShowUpdateProduct(!showUpdateProduct)
  }




  return (
    <div className="bg-white w-60 h-[430px] rounded-lg shadow-md overflow-hidden transform transition duration-300  cursor-pointer border-2 border-gray-300 flex flex-col items-center relative">
      <img
        src={`${REACT_APP_API}/admin/products/getProductPhoto/${_id}`}
        className="w-56 h-60 object-cover hover:scale-105 transition-all duration-300 relative"
        alt={name}
      />
      <div className="absolute bottom-4 w-44">
        {/* <button className="bg-indigo-700 text-white w-52 rounded-md p-2">
          View Details
        </button> */}
        <div className="flex gap-4  justify-between">
          <div
            onClick={handleClickEdit}
            className="w-20 bg-green-600 text-white flex items-center justify-center p-1 rounded-md hover:bg-green-800 transition-all duration-300"
          >
            <AiFillEdit
              size={24}
              className="cursor-pointer text-white  transition-all duration-300"

              // onClick={(e) => editCategory(e, category._id)}
            />
          </div>
          <div  onClick={() => deleteProduct(_id)} className="w-20 bg-red-600 text-white flex items-center justify-center p-1 rounded-md hover:bg-red-800 transition-all duration-300">
            <AiFillDelete
              size={24}
              className="cursor-pointer text-white  transition-all duration-300"
             
            />
          </div>
        </div>
      </div>
      <div className="p-3 w-56 flex flex-col gap-1 ">
        <h3 className="text-lg font-semibold ">{name}</h3>
        <p className="text-gray-600 ">{description.substring(0, 6)}</p>
        <p className="text-green-600 font-bold">
          Rs. {price}{" "}
          <span className=" line-through text-gray-400">{price + 500}</span>{" "}
          <span className="text-red-500">{Math.round(500 / 100)} % off</span>
        </p>
      </div>

      {/* <button className="bg-indigo-700 text-white p-2 rounded-md my-2">
        Add To Cart
      </button> */}
      
    </div>
  );
};

export default AdminProductCard;
