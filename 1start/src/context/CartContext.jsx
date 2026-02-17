import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart,setCart] = useState(()=>{
        const storeedCart = localStorage.getItem("cart");
        return storeedCart ? JSON.parse(storeedCart) : [];
    });

    const addToCart = useCallback((product) =>{
        setCart((prev)=>{
            const exists = prev.find((item)=> item.id === product.id);
            if(exists) {
                return prev.map((item) => 
                    item.id === product.id ? {...item,quantity:item.quantity+1} : item );
            }
            return [...prev,{...product,quantity:1}];
        })
    },[]);

    const removeFromCart = (id) =>{
        setCart((prev)=> prev.map((item) => 
                    item.id === id ? {...item,quantity:item.quantity-1} 
        : item 
    )
        .filter((item)=>item.quantity>0)
    )}

     const total = useMemo(()=>{
        return cart.reduce((sum,item) => sum + item.price * item.quantity, 0);
    },[cart]) 

       useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart])


    return <CartContext.Provider value={{cart,addToCart,removeFromCart,total}}>{children}</CartContext.Provider>
    
}       