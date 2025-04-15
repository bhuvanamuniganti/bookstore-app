import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Bookstore</h1>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/books" style={styles.link}>Books</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/cart" style={styles.link}>Cart</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/checkout" style={styles.link}>Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
  },
  logo: {
    margin: 0,
    fontSize: '32px',
  },
  nav: {
    marginTop: '10px',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Header;
