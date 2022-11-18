import React from 'react';
import { GlobalStyleComponent } from '../../style/styled/globalStyle';
import Header from './components/header/header';
import { ErrorBoundary } from '../../components/errorBoundary/errorBoundary';
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
