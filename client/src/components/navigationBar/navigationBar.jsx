import React, { useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { NavigationWrapper } from './navigationBarStyle';

export const NavigationBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('search') || '';

  return (
    <NavigationWrapper>
      <div className="navigation-container">
        <div>
          <Link to="courses/available">Available course</Link>
          <Link to="courses/archive">Archive</Link>
        </div>
      </div>
    </NavigationWrapper>
  );
};
