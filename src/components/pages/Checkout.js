import React, { useState } from 'react';

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div style={styles.container}>
      <h2>✅ Checkout</h2>

      {orderPlaced ? (
        <div style={styles.success}>
          <h3>🎉 Order Placed Successfully!</h3>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <div style={styles.form}>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="text" placeholder="Address" style={styles.input} />
          <input type="text" placeholder="Phone Number" style={styles.input} />
          <button onClick={handlePlaceOrder} style={styles.button}>
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
  },
  success: {
    backgroundColor: '#d4edda',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #c3e6cb',
  },
};

export default Checkout;
