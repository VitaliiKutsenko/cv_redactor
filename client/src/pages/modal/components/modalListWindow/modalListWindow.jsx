import React, { useEffect, useState } from 'react';
import { ModalForm } from '../modalForm/modalForm';
import { addCvData } from '../../../../store/actions/cvActions/cvDataActions/cvDataActions';
import { useParams } from 'react-router-dom';
import { ModalListWindowWrapper } from './ModalListWindowStyled';

export const ModalListWindow = ({ path }) => {
  const [lists, setLists] = useState([
    <ModalForm
      key={uniqId}
      id={uniqId}
      path={path}
      // handleRemoveList={handleRemoveList}
      name={name}
      // onSubmit={acc => dispatch(addCvData(acc))}
    />,
  ]);
  const [uniqId, setUniqId] = useState(1);

  const handleAddList = (path, name) => {
    setLists(prev => [...prev, prev]);

    setUniqId(prev => prev + 1);
  };

  return (
    <ModalListWindowWrapper>
      {lists.map(item => item)}
      <button onClick={() => handleAddList(path, path)}>add</button>
    </ModalListWindowWrapper>
  );
};
