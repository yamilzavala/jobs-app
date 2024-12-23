import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/appContext';

const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();

  // Si el usuario no está autenticado, redirige a la página de inicio
  if (!user) {
    return <Navigate to="/" />;
  }

  // Si el usuario está autenticado, renderiza los hijos
  return children;
};

export default PrivateRoute;
