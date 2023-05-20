import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthContext';


const Home: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;