import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenStatus } from '../../helper';
import { NavigationBar } from '../navigationBar/navigationBar';
import { MainLayoutWrapper } from './mainLayoutStyle';
import { Loader } from '../loader/loader';

export const MainLayout = () => {
  const [responseStatus, setResponseStatus] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(true);

  const token = getTokenStatus();
  const dispatch = useDispatch();
  const courses = useSelector(store => store?.courses);

  useEffect(() => {
    if (token) {
      dispatch(() => {});
    }
  }, [token]);

  useEffect(() => {
    if (courses?.hasError === false) {
      setResponseStatus(true);
      setTimeout(setRemoveLoader, 500, false);
    }
  }, [courses]);

  return (
    <MainLayoutWrapper>
      <NavigationBar />
      {removeLoader && <Loader responseStatus={responseStatus} />}
      <Outlet />
    </MainLayoutWrapper>
  );
};
