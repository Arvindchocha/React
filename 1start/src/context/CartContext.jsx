import { createContext, useEffect, useMemo, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD":
            const exists = state.find(
                (item) => item.id === action.payload.id
            )

            if (exists) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 } : item
                )
            }

            return [...state, { ...action.payload, quantity: 1 }]

        case "DECREASE":
            return state
                .map((item) => item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
                .filter((item) => item.quantity > 0);

        case "REMOVE":
            return state.filter((item) => item.id !== action.payload)

        default:
            return state

    }
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer,initialState)

    const addToCart = (product) => {
        dispatch({type:"ADD",payload:product});
    };

    const decreaseQuantity = (id) =>{
        dispatch({type:"DECREASE",payload:id});
    }

    const removeFromCart = (id) =>{
        dispatch({type:"REMOVE",payload:id});
    }

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cart])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])


    return <CartContext.Provider value={{ cart, addToCart, removeFromCart,decreaseQuantity, total }}>{children}</CartContext.Provider>

}


