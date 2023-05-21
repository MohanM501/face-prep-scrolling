import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import styles from './Navbar.module.css';

// To navigate between login and home page;

const Navbar = () => {
 const {isAuthenticated,logout}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogin=()=>{
      // if isAuthenticated is true ; navbar allows to logout;
      if(isAuthenticated){
          logout();
      }
      navigate("/login");
  }
 
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