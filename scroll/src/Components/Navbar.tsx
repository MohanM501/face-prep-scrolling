import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div id={styles.container}>
        <div>
            <h4>Infinite Scrolling</h4>
        </div>
        <div>
            <button>Home</button>
            <button>Login</button>
        </div>   
    </div>
  )
}

export default Navbar