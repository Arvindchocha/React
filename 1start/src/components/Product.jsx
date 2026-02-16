export default function Product({ product, addToCart,removToCart,isInCart }) {
  return (
    <div className="product">
      <div className="text">
        <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      </div>
      {addToCart &&
      <button onClick={() => addToCart(product)} disabled={isInCart} >Add to Cart</button>}
      {removToCart && 
      <button onClick={()=> removToCart(product.id)}>remove to cart</button>}
    </div>
  );
}