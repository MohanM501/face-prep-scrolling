import React from 'react';
import './App.css';
import { AuthContextProvider } from './Components/AuthContext';
import Navbar from './Components/Navbar';
import AllPages from './Pages/AllPages';

function App() {
  return (
    <div className="App">
      {/* Allowing Authcontext values to be access within the Navbar and AllPages */}
      <AuthContextProvider>
        <Navbar/>
        <AllPages/>
     </AuthContextProvider>
    </div>
  );
}

export default App;
