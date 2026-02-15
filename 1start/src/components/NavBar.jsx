import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function NavBar(){
    const {cart} = useContext(CartContext)
    return <h2>cart:{cart.lenght}</h2>
}