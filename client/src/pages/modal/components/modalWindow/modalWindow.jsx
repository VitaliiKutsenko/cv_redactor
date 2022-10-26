import React, { useRef, useState } from 'react';
import { ModalWrapper } from './modalWindowStyle';
import { SelectMenu } from '../selectMenu/selectMenu';
import { useScrollBar } from '../../../../components/scrollBar/useScrollBar';
import { ModalForm } from '../modalForm/modalForm';
import { ModalListWindow } from '../modalListWindow/modalListWindow';

export const ModalWindow = ({ onClose }) => {
  const [modalContent, setModalContent] = useState(false);
  const [path, setPath] = useState('');
  const modalHandler = e => {};

  const scrollRef = useRef(null);

  useScrollBar(scrollRef);

  return (
    <ModalWrapper onClick={modalHandler}>
      {modalContent && (
        <div className="modal_list__content">
          <ModalListWindow path={path} />
        </div>
      )}
      <div className="modal" ref={scrollRef}>
        <div className="modal_header">
          {<SelectMenu setModalContent={setModalContent} setPath={setPath} path={path} />}
          <button onClick={() => setModalContent(prev => !prev)}> * </button>
        </div>
      </div>
    </ModalWrapper>
  );
};
