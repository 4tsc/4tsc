import React from "react";
import "./../styles/ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
