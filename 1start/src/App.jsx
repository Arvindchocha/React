import { useEffect, useState } from 'react'
import './App.css'


export default function App() {
  const [cart, setCart] = useState([]);
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json();
        setProducts(data);
        setLoading(false)
      }catch(error){
        console.log(`failed to fetch ${error}`)
      }
    }
    fetchProducts()
  },[])

  const addToCart = (product) => {
    const exists = cart.find((item)=>item.id === product.id);
    if(!exists){
    setCart([...cart, product]); }else{
      alert("Product already in cart!");
    }
  };
  
  const total = cart.reduce((total,item) => total + item.price,0);

  return (
    <div>
      <h2>Cart Count: {cart.length}</h2>
      <h2>Cart total price: {total === 0 ? "Cart is empty" : total}</h2>
{loading && "loading..." }
<div className='products'>
      {!loading && products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
</div>
    
    </div>
  );
}



function Product({ product, addToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
