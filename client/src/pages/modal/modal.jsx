import React, { useState } from 'react';

import { ModalWrapper } from './modalStyled';
import { SelectMenu } from './components/selectMenu/selectMenu';
import { Outlet } from 'react-router-dom';

export const Modal = ({ modalState, onClose, ...props }) => {
  const [modalContent, setModalContent] = useState(false);
  const modalHandler = e => {};

  return (
    <ModalWrapper onClick={modalHandler}>
      <div className="modal">
        <div className="modal_header">
          <SelectMenu setModalContent={setModalContent} />
        </div>
      </div>
      {modalContent && (
        <div className="modal_list__content">
          <div className="outlet_wrapper">
            <Outlet />
          </div>
        </div>
      )}
    </ModalWrapper>
  );
};
