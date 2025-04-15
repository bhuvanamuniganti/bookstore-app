import React, { useState } from 'react';
import CartItem from '../CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 499 },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', price: 399 }
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={handleRemove} />
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px'
  }
};

export default Cart;
