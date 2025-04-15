import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div style={styles.item}>
      <div>
        <h4>{item.title}</h4>
        <p><strong>Author:</strong> {item.author}</p>
        <p><strong>Price:</strong> ₹{item.price}</p>
      </div>
      <button onClick={() => onRemove(item.id)} style={styles.removeBtn}>Remove</button>
    </div>
  );
};

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '10px',
    backgroundColor: '#fff'
  },
  removeBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default CartItem;
