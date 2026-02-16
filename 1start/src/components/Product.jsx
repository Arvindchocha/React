export default function Product({ product, addToCart,removToCart,isInCart }) {
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