import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from '../components/hoc/PublicRoute';
import { Registration } from '../pages/auth/registration/registration';
import { SignIn } from '../pages/auth/signIn/signIn';
import { ResetPassword } from '../pages/auth/resetPassword/resetPassword';

export const AuthRouter = () => {
  const routes = [
    {
      path: 'sign-in',
      Component: <SignIn />,
    },
    {
      path: 'registration',
      Component: <Registration />,
    },
    {
      path: 'forgot-password',
      Component: <ResetPassword />,
    },
  ];

  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<PublicRoute>{Component}</PublicRoute>} />;
      })}
    </Routes>
  );
};
