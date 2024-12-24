import React from "react";
import ProductCard from "./ProductCard";
import "./../styles/ProductList.css";

const products = [
  { id: 1, name: "Paisaje", price: 50, image: "/images/paisaje.jpg" },
  { id: 2, name: "Bodegón", price: 40, image: "/images/bodegon.jpg" },
  { id: 3, name: "Retrato", price: 60, image: "/images/retrato.jpg" },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
};

export default ProductList;
