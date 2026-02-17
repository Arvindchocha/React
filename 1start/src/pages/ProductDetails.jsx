import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const params = useParams();
  const [product, setproduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
        );
        if (!res.ok) {
          throw new setError("Failed to fetch product");
        }
        const data = await res.json();
        setproduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="page">
      <div className="container">
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {!loading && (
          <div className="producDetails">
            <img src={product.image} width={200} />
            <div className="text">
              <Link to="/">Back</Link>
              <h1>{product.title}</h1>
              <p>₹ {product.price}</p>
              <p>{product.description}</p>
              <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
