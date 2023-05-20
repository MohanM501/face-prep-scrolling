import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate=useNavigate();
  const handleLogin=()=>{
      navigate("/login");
  }

  return (
    <div id={styles.container}>
        <div>
            <Link to="/"><h3>Infinite Scrolling</h3></Link>
        </div>
        <div>
            <Link to="/home"><button>Home</button></Link>
            <button onClick={handleLogin}>Login</button>
        </div>   
    </div>
  )
}

export default Navbar