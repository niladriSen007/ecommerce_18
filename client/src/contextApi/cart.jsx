import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) =>{



    const [cartItem,setCartItem] = useState([])

    useEffect(()=>{
        const data = localStorage.getItem("cartDetails")
        const parseData = JSON.parse(data)
        setCartItem(prev=>[...prev,parseData])
        //eslint-disable-next-line


    },[])

    return <CartContext.Provider value={{cartItem,setCartItem}}>
        {children}
    </CartContext.Provider>

}

export const useCart = () => useContext(CartContext)