import React, { useState } from 'react';
import Nav from './Components/Nav';
import CardPage from './Components/CardPage';
import CartModal from './Components/CartModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add to Cart Logic
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from Cart Logic
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Nav cart={cart} openCart={() => setIsModalOpen(true)} />
      <CardPage addToCart={addToCart} />
      {isModalOpen && (
        <CartModal 
          cart={cart} 
          removeFromCart={removeFromCart} 
          closeModal={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}

export default App;
