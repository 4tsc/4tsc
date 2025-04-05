import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app-container">
      <Header cartCount={cart.length} onCartIconClick={toggleCart} />
      <main>
        <ProductList onAddToCart={handleAddToCart} />
      </main>
      {isCartOpen && <Cart cartItems={cart} onCloseCart={toggleCart} />}
    </div>
  );
};

export default App;
