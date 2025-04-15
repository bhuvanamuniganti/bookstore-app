import React from 'react';
import BookCard from '../BookCard';

const dummyBooks = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 499 },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', price: 399 },
  { id: 3, title: 'Ikigai', author: 'Francesc Miralles', price: 299 }
];

const BookListing = () => {
  return (
    <div style={styles.container}>
      <h2>📚 Book Listing Page</h2>
      <div style={styles.grid}>
        {dummyBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  }
};

export default BookListing;
