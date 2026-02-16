import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart,setCart] = useState(()=>{
        const storeedCart = localStorage.getItem("cart");
        return storeedCart ? JSON.parse(storeedCart) : [];
    });

    

    const addToCart = (product) =>{
        setCart((prev)=>{
            const exists = prev.find((item)=> item.id === product.id);
            if(exists) return prev;
            return [...prev,product];
        })
    }

    const removeFromCart = (id) =>{
        setCart((prev)=> prev.filter((item)=> item.id !== id))
    }

    const total = cart.reduce((sum,item) => sum + item.price, 0);

       useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])

    return <CartContext.Provider value={{cart,addToCart,removeFromCart,total}}>{children}</CartContext.Provider>
    
}       