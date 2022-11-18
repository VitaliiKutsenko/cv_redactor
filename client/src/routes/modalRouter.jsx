import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from '../components/hoc/PublicRoute';
import { SelectMenu } from '../pages/modal/components/selectMenu/selectMenu';

export const ModalRouter = ({}) => {
  const [modalContent, setModalContent] = useState('');

  console.log(modalContent);

  return (
    <div>
      <SelectMenu setModalContent={setModalContent} />

      <Routes>
        {/*{routes.map(({ path, Component }) => {*/}
        {/*  return <Route key={path} path={path} element={<PublicRoute>{Component}</PublicRoute>} />;*/}
        {/*})}*/}
      </Routes>
    </div>
  );
};
