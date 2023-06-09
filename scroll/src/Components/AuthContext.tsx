import React, { createContext, useState } from 'react';

// AuthContext provides access to isAuthenticated, logout, and login for every component as global state;  

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider:React.FC<AuthContextProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};