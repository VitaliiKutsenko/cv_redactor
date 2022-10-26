import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow } from './components/modalWindow/modalWindow';

const modalRootElem = document.querySelector('#modal');

export const Modal = ({ modalState, onClose, ...props }) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (modalState) {
      modalRootElem.appendChild(element);

      return () => modalRootElem.removeChild(element);
    }
  });

  if (modalState) {
    return createPortal(<ModalWindow onClose={onClose} />, element);
  }

  return null;
};
