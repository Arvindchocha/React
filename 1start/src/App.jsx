import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(`failed to fetch ${error}`);
      }
    };
    fetchProducts();
  }, []);



  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
    } else {
      alert("Product already in cart!");
    }
  };
  const removToCart = (item) =>{
    const updatedCart = cart.filter((pro)=>pro.id !== item.id);
    setCart(updatedCart);
  }

  const total = cart.reduce((total, item) => total + item.price, 0);

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
      <div className="cartContaint">
      <h2>Cart Count: {cart.length}</h2>
      <h2>Cart total price: {total === 0 ? "Cart is empty" : total}</h2>
      {cart.map((item)=>(
        <Product key={item.id} product={item} removToCart={removToCart} />
      ))}
      </div>
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
      </div>
    </div>
  );
}

function Product({ product, addToCart,removToCart,isInCart }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      {addToCart &&
      <button onClick={() => addToCart(product)} disabled={isInCart} >Add to Cart</button>}
      {removToCart && 
      <button onClick={()=> removToCart(product)}>remove to cart</button>}
    </div>
  );
}
