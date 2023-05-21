import React, { useContext, ReactNode } from 'react';
import {Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

type PrivateRouteProps = {
  children: ReactNode;
};

// PrivateRoute component is to check whether user is logged before accessing the route(resource) "/home"; if it doesn't then it will re-direct to "/login" route;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;