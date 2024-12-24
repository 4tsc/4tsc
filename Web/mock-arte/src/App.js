import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-container">
      <Header cartCount={cart.length} />
      <main>
        <ProductList onAddToCart={handleAddToCart} />
      </main>
      <Cart cartItems={cart} />
    </div>
  );
};

export default App;
