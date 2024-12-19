import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css'; 

function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h5 className="cart-item-title">{item.title}</h5>
                  <p className="cart-item-price">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
