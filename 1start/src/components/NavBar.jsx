import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export default function NavBar() {
    const { cart } = useContext(CartContext)

    return <div className="nav">
        <div className="container">
            <div className="navInr">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
                <h2>Cart: {cart.length}</h2>
            </div>
        </div>
    </div>
}