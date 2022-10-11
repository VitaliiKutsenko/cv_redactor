import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTokenStatus } from '../../helper';

export const PublicRoute = ({ children }) => {
  const token = getTokenStatus();
  const redirect = useNavigate();

  useEffect(() => {
    if (token) {
      redirect('/');
    }
  }, [token, redirect]);

  return children;
};
