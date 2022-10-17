import React, { useState, useRef, useEffect } from 'react';
import { ModalWrapper } from './modalStyle';
import { useNavigate } from 'react-router-dom';
import { SelectMenu } from './components/selectMenu/selectMenu';
import { ModalForm } from './components/modalForm/modalForm';
import { ButtonForm } from './components/buttonForm/button';
import { useScrollBar } from '../../../components/scrollBar/useScrollBar';
import {addCvData, removeCvData} from '../../../store/actions/cvActions/cvDataActions/cvDataActions';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = ({ type }) => {
  const store = useSelector(store => store?.cvData);
  useEffect(() => {
    if (store) {
      console.log(store);
    }
  }, [store]);

  const [schemaToggle, setSchemaToggle] = useState('');
  const dispatch = useDispatch();
  const [uniqId, setUniqId] = useState(1);
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();
  const goBackHandler = e => {
    if (!e.target.closest('.modal')) {
      navigate(-1);
    }
  };

  const handleAddList = ({ path, name }) => {
    setLists(prev => [
      <ModalForm
        key={uniqId}
        id={uniqId}
        path={path}
        handleRemoveList={handleRemoveList}
        name={name}
        onSubmit={acc => dispatch(addCvData(acc))}
      />,
      ...prev,
    ]);

    setUniqId(prev => prev + 1);
  };

  const handleRemoveList = buttonId => {
    setLists(prev => prev.filter(item => item.key !== buttonId));
    dispatch(removeCvData(buttonId))
  };

  const handleSubmit = e => {
    console.log(123);
  };

  const scrollRef = useRef(null);

  useScrollBar(scrollRef);

  return (
    <ModalWrapper className={type && 'active'} onClick={goBackHandler}>
      <div className="modal" ref={scrollRef}>
        <div className="modal_header">
          <SelectMenu setSchemaToggle={setSchemaToggle} handleAddList={handleAddList} />
          <ButtonForm content="Confirm" type="submit" onClick={handleSubmit} />
        </div>
        <div className="modalScroll">{[...lists]}</div>
      </div>
    </ModalWrapper>
  );
};
