import React from 'react';
import './productCard.css';

function ProductCard({ product }) {
  return (
    <div className='container'>
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <a href={`/product/${product.id}`} className="btn btn-primary">View Details</a>
        
      </div>
    </div>
    </div>
  );
}

export default ProductCard;
