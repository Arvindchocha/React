import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const [product, setproduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setproduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  console.log(product);
  return (
    <div className="page">
      <div className="container">
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {!loading && (
          <div className="producDetails">
            <img src={product.image} width={200} />
            <div className="text">
              <h1>{product.title}</h1>
              <p>₹ {product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
