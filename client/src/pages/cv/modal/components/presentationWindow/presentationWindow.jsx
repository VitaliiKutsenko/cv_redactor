import React from 'react';
import { useSelector } from 'react-redux';

export const PresentationWindow = () => {
  const employment = useSelector(store => store.cvData);

  // console.log(employment);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
