import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
    const { cart } = useContext(CartContext);
    const { user,logOut } = useContext(AuthContext);

    return <div className="nav">
        <div className="container">
            <div className="navInr">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    {user && 
                    <li>{user?.userName}</li>}
                </ul>
                <div className="navInr">
                    <h2>Cart: {cart.length}</h2>
                    {user && 
                    <button onClick={logOut}>Logout</button>}
                </div>
            </div>
        </div>
    </div>
}