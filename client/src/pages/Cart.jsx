import React from "react";
import { useCart } from "../contextApi/cart";
import { useAuth } from "../contextApi/store";
const REACT_APP_API = "http://localhost:5000";

const Cart = () => {
  const { auth } = useAuth();

  const { cartItem, setCartItem } = useCart();
  console.log(cartItem);
  if(cartItem[0]?._id === undefined || cartItem[0]?._id === null)
    cartItem.shift()
  return (
    <div>
      <h2 className="text-xl">Hello {auth?.user?.name}</h2>
      {cartItem.length > 0 && (
        <p>You have {cartItem.length} items in your cart.</p>
      )}
      {cartItem?.map((item) => (
        <div
          key={item?.category?._id}
          className="flex items-center p-2 bg-white shadow-md rounded-md"
        >
          <img
            src={`${REACT_APP_API}/admin/products/getProductPhoto/${item?._id}`}
            alt={item?.name}
            className="w-16 h-16 object-contain mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold">{item?.name}</h3>
            <p className="text-gray-600">${item?.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
