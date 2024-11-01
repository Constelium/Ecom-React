import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go add some amazing canvases!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <span className="cart-item-title">{item.name}</span>
                <span className="cart-item-price">
                  Price: {item.price.toFixed(2)} €
                </span>
                <div className="cart-item-quantity">
                  <label>Quantity: </label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="input-quantity"
                    onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
                  />
                </div>
              </div>
              <button
                className="remove-button"
                onClick={() => onRemoveItem(item.id)}
              >
                Retirer du panier
              </button>
            </div>
          ))}
          <div className="total-price">Total: {calculateTotal()} €</div>
          <button className="checkout-button">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
