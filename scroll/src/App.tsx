import React from 'react';
import './App.css';
import { AuthContextProvider } from './Components/AuthContext';
import Navbar from './Components/Navbar';
import AllPages from './Pages/AllPages';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar/>
        <AllPages/>
     </AuthContextProvider>
    </div>
  );
}

export default App;
