import React from "react";
import "./../styles/Header.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>Galería de Pinturas al Óleo</h1>
      <div className="cart-icon">
        🛒 <span>{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
