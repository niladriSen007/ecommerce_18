import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([null]);

  useEffect(() => {
    const data = localStorage.getItem("cartDetails");
    if (data) {
      const parseData = JSON.parse(data);
      for (let data in parseData) {
        if (parseData[data] === null || parseData[data] === undefined)
          parseData.splice(data, 1);
      }
      for (let data in cartItem) {
        if (cartItem[data] === null) cartItem.splice(data, 1);
      }
      setCartItem((prev) => [...prev, parseData]);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
