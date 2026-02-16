import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function NavBar() {
    const { cart } = useContext(CartContext)

    return <div className="nav">
        <div className="container">
            <div className="navInr">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
                <h2>Cart: {cart.length}</h2>
            </div>
        </div>
    </div>
}