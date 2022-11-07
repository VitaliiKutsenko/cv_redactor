import React, { useEffect, useRef, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useScrollBar } from '../../components/scrollBar/useScrollBar';
import { ModalWrapper } from './modalStyled';
import { SelectMenu } from './components/selectMenu/selectMenu';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Modal = ({ modalState, onClose, ...props }) => {
  const [modalContent, setModalContent] = useState(false);
  const [path, setPath] = useState('');
  const modalHandler = e => {};

  return (
    <ModalWrapper onClick={modalHandler}>
      <div className="modal">
        <div className="modal_header">
          {<SelectMenu setModalContent={setModalContent} setPath={setPath} path={path} />}
        </div>
      </div>
      {modalContent && (
        <div className="modal_list__content">
          <Outlet />
          <div className="progressBar">{modalContent}</div>
        </div>
      )}
    </ModalWrapper>
  );
};
