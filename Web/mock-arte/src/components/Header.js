import React from "react";
import "../styles/Header.css";

const Header = ({ cartCount, onCartIconClick }) => {
  return (
    <header className="header">
      <h1>Mi Tienda de Pinturas</h1>
      <button className="cart-button" onClick={onCartIconClick}>
        <span className="cart-icon">🛒</span>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </header>
  );
};

export default Header;
