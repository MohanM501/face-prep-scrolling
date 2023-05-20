import React, { ReactNode } from 'react';

const PrivateRoute: React.FC = ({ children }: { children?: ReactNode }) => {
  return <>{children}</>;
};

export default PrivateRoute;