import React, { useState } from 'react';
import { ModalForm } from '../modalForm/modalForm';

import { useLocation } from 'react-router-dom';
import { ModalListWindowWrapper } from './modalListWindowStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addAdditionalField } from '../../../../store/actions/cvActions/cvDataActions/cvDataActions';

export const ModalListWindow = () => {
  const { pathname, state } = useLocation();
  const addFieldDispatch = useDispatch();

  const path = pathname.split('/')[2];
  const store = useSelector(store => store?.cvData || []);

  const [showForm, setShowForm] = useState(true);

  const handleShowForm = e => {
    setShowForm(prev => !prev);
  };

  const handleFormValues = values => {
    console.log(values);
  };

  const handleAdditionalField = () => {
    addFieldDispatch(addAdditionalField(path));
  };

  const renderForm = () => {
    return store[path].map(({ id, fields }) => {
      return (
        <ModalForm
          key={id}
          id={id}
          state={state}
          path={path}
          handleAdditionalField={handleAdditionalField}
          handleFormValues={handleFormValues}
          onSubmit={event => console.log(event)}
          fieldsList={fields}
        />
      );
    });
  };

  return <ModalListWindowWrapper>{renderForm()}</ModalListWindowWrapper>;
};
