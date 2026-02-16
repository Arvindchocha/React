import {Link} from 'react-router-dom'
export default function Product({ product, addToCart,removToCart,isInCart }) {

  const handleRemove = (e) => {
    e.preventDefault();  
    removToCart(product.id);
  };

  const handleAdd = (e) => {
    e.preventDefault();  
    addToCart(product);
  };
  return (
    <Link to={`/product-details/${product.id}`} className="product">
      <img src={product.image} alt="" width={418} height={597} />
      <div className="text">
        <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      </div>
      {addToCart &&
      <button onClick={handleAdd} disabled={isInCart} >Add to Cart</button>}
      {removToCart && 
      <button onClick={handleRemove}>remove to cart</button>}
    </Link>
  );
}