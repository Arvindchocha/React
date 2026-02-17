import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Product from "../components/Product";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { products, loading, error } = useProducts();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase().trim());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

 

  return (
    <div className="page">
      <div className="container">
        <div className="maineContaint">
          <div className="form">
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
          </div>

          {loading && "loading..."}
          <div className="products">
            {!loading &&
              filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}
