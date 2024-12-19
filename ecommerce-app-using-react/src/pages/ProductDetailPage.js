import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import './ProductDetailPage.css'; 

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details', error));
  }, [id]);

  return (
    <div className='container'>
    <div className="product-detail-container">
      <h2 className="product-title">{product.title}</h2>
      <div className="product-detail-row">
        <div className="product-image-container">
          <img className="product-image" src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h3 className="product-price">${product.price}</h3>
          <p className="product-description">{product.description}</p>
          <button className="btn btn-success add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProductDetailPage;
