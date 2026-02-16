import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Product from "../components/Product";

export default function Home() {
  const { removeFromCart, total, cart } = useContext(CartContext);
  return (
    <div className="page">
      <div className="container">
        <div className="cartContaint">
          <h2>Cart total price: {total === 0 ? "Cart is empty" : total}</h2>
          <div className="products">
            {cart?.map((item) => (
              <Product
                key={item.id}
                product={item}
                removToCart={removeFromCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
