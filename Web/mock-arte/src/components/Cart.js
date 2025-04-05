import React from "react";
import "../styles/Cart.css";

const Cart = ({ cartItems, onCloseCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.precio, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <button className="close-cart" onClick={onCloseCart}>
          ✖
        </button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.nombre}</span>
              <span>${item.precio}</span>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total-price">
            <strong>Total:</strong> ${totalPrice}
          </div>
          <button className="checkout-button">Tramitar Pago</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
