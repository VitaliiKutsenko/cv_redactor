import React from 'react';
import { getTokenStatus } from '../../helper';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = getTokenStatus();

  console.log(token);

  return !token ? <Navigate to="/" /> : children;
};
