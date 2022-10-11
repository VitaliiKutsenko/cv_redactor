import React from 'react';
import { GlobalStyleComponent } from '../../styled/globalStyle';
import Header from '../header/header';
import { ErrorBoundary } from '../errorBoundary/errorBoundary';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <GlobalStyleComponent />
      <Header />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
};
