import React, { useEffect, useState } from 'react';
import { CvWrapper } from './cvStyled';
import { CvHeader } from './components/cvHeader/cvHeader';
import { CvMain } from './components/cvMain/cvMain';
import { useLocation, Outlet } from 'react-router-dom';

export const Cv = () => {
  // const location = useLocation();

  return (
    <CvWrapper>
      <CvHeader />
      <CvMain />
      <Outlet />
    </CvWrapper>
  );
};
