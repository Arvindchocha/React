import React from 'react';
import {Link} from 'react-router-dom'
function Product({ product,removeToCart,inCart=false,addToCart }) {

  const handleRemove = (e) => {
    e.preventDefault();  
    removeToCart(product.id);
  };
  const handleAdd = (e) =>{
    e.preventDefault();
    addToCart(product);
  }

  return (
    <Link to={`/product-details/${product.id}`} className="product">
      <img src={product.image} alt="" width={418} height={597} />
      <div className="text">
        <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      </div>
      {inCart && 
        <div className="quantity">
          {product.quantity === 1 ? <button className='delete' onClick={handleRemove}></button>:<button className='decrease' onClick={handleRemove}></button>}
          <p>{product.quantity}</p>
          <button className='increase' onClick={handleAdd}></button>
        </div>
        }
    </Link>
  );
}

export default React.memo(Product);