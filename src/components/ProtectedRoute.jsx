// ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);

  // Si el usuario no está autenticado, redirige a /login
  if (!authToken) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, renderiza el componente hijo
  return children;
};

export default ProtectedRoute;
