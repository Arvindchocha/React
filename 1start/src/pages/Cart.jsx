import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Product from "../components/Product";

export default function Home() {
  const { removeFromCart, total, cart,addToCart } = useContext(CartContext);
  return (
    <div className="page">
      <div className="container">
        <div className="cartContaint">
          <h2>Cart total price: {total === 0 ? "Cart is empty" : total.toFixed(2)}</h2>
          <div className="products">
            {cart?.map((item) => (
              <Product
                key={item.id}
                product={item}
                removeToCart={removeFromCart}
                addToCart={addToCart}
                inCart={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
