import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {useProducts} from "../hooks/useProducts";
import Product from "../components/Product";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const {addToCart,cart} = useContext(CartContext)
  const {products,loading,error} = useProducts()

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase().trim());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const isInCart = (id) =>{
    return cart.some((item)=>item.id === id)
  }

  return (
    <div className="page">
      <div className="maineContaint">
      <input
        type="text"
        placeholder="Sherch products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
      </select>

      {loading && "loading..."}
      <div className="products">
        {!loading &&
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} isInCart={isInCart(product.id)} />
          ))}
      </div>
      {error && <p>{error}</p>}
      </div>  
    </div>
  );
}
