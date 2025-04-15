import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    width: '250px',
    margin: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default BookCard;
