import { useEffect, useState } from "react";
import { useAuth } from "../contextApi/store";
const REACT_APP_API = "http://localhost:5000";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Cart = () => {
  const { auth } = useAuth();

  // const { cartItem, setCartItem } = useCart();
  // console.log(cartItem);
  // if (cartItem[0]?._id === undefined || cartItem[0]?._id === null)
  //   cartItem.shift();

  const cartItem = JSON.parse(localStorage.getItem("cartDetails"));

  // const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // const handleProductSelection = (product) => {
  //   const isProductSelected = selectedProducts.some((p) => p.id === product.id);

  //   if (isProductSelected) {
  //     setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
  //   } else {
  //     setSelectedProducts([...selectedProducts, product]);
  //   }
  // };

  // Calculate the total price based on selected products
  useEffect(() => {
    for (let data in cartItem) {
      if (cartItem[data] === null) cartItem.splice(data, 1);
    }
    const price = cartItem?.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(price);
  }, [cartItem]);

  // const total = Math.floor(totalPrice * .05)

  return (
    <div className="px-48 py-10">
      <h2 className="text-4xl font-bold">Hello {auth?.user?.name}</h2>
      {cartItem?.length > 0 && (
        <p className="text-xl my-4">
          You have {cartItem?.length} items in your cart.
        </p>
      )}
      <div className="flex">
        <div className="flex flex-col gap-8">
          {cartItem?.map((item) => (
            <div
              key={item?.category?._id}
              className="flex items-center p-2 bg-white shadow-md rounded-md w-[44vw] justify-between "
            >
              <img
                src={`${REACT_APP_API}/admin/products/getProductPhoto/${item?._id}`}
                alt={item?.name}
                className="w-64 h-64 object-contain mr-4"
              />
              <div className="flex items-start flex-col  w-[20vw] ml-12">
                <h3 className="text-4xl font-semibold ">{item?.name}</h3>
                <p className="text-gray-600">
                  Price Rs{" "}
                  <span className="span font-bold text-2xl">{item?.price}</span>{" "}
                  <span className="text-gray-400 line-through text-lg pl-2">
                    {item?.price + 500}
                  </span>{" "}
                  <span className="text-orange-600  text-lg pl-2">
                    ( {Math.floor(500 / 102)}% off)
                  </span>{" "}
                </p>
                <div className="flex items-center gap-2 text-xl">
                  <button>
                    <GrSubtractCircle />
                  </button>
                  1
                  <button>
                    <IoMdAddCircleOutline />
                  </button>
                </div>
                <span className="text-green-600 font-bold text-md pl-2">
                  14 Days Return Policy
                </span>{" "}
              </div>
            </div>
          ))}
        </div>
        <div className="border-2 border-gray-300 p-4 w-96 rounded-md h-[60vh]">
          <p>Payment Details</p>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>

            <div className="mt-4 flex items-start justify-between">
              <h2 className="text-lg font-bold mb-2">
                Price ({cartItem.length}) items
              </h2>
              <p className="text-xl">${totalPrice}</p>
            </div>
            <div className="mt-4 flex items-start justify-between">
              <h2 className="text-lg font-bold mb-2">Delivery Charges</h2>
              <p className="text-xl">${Math.floor(totalPrice * 0.005)}</p>
            </div>
            <hr className="w-70 border-2 border-gray-300 rounded-full" />
            <div className="mt-4 flex items-start justify-between">
              <h2 className="text-lg font-bold mb-2">Total Price:</h2>
              <p className="text-xl">${totalPrice + totalPrice * 0.05}</p>
            </div>
            <button className="w-64 mt-4 bg-red-600 text-white rounded-md p-2">
              CHECKOUT
            </button>
            <button className="w-64 mt-4 bg-blue-600 text-white rounded-md p-2">
              <span className="text-blue-900 font-bold text-xl">Pay</span>
              <span className="text-blue-200">Pal</span>
            </button>
            <p className="p-2 mt-2 text-xl w-64">Deliver to - {auth?.user?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
