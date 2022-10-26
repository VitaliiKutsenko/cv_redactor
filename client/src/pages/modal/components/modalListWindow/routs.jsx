import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ModalListWindow } from './modalListWindow';
import { Modal } from '../../modal';

const Routs = () => {
  return (
    <div>
      <Routes>
        <Route path="modal" element={<Modal />}>
          <Route path="skills" element={<ModalListWindow path="skills" />} />
          <Route path="languages" element={<ModalListWindow path="languages" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routs;
