import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
 const {isAuthenticated}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogin=()=>{
      navigate("/login");
  }
 
  console.log(isAuthenticated,"isAuthenticated in Navbar");

  return (
    <div id={styles.container}>
        <div>
            <Link to="/"><h3>Infinite Scrolling</h3></Link>
        </div>
        <div>
            <Link to="/home"><button>Home</button></Link>
            <button onClick={handleLogin}>{isAuthenticated?"Logout":"login"}</button>
        </div>   
    </div>
  )
}

export default Navbar