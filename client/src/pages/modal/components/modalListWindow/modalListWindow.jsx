import React, { useEffect, useState } from 'react';
import { ModalForm } from '../form/modalForm';

import { useLocation, Outlet } from 'react-router-dom';
import { ModalListWindowWrapper } from './modalListWindowStyled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAdditionalField,
  removeAdditionalField,
} from '../../../../store/localCvCards/cvDataActions/cvDataActions';
import { getUserCardError, setUserCard } from '../../../../store/cv/cvUserCards/cvUserCardsActions';
import { logPlugin } from '@babel/preset-env/lib/debug';
import {
  getAllUserFields,
  getAllUserFieldsError,
} from '../../../../store/cv/cvAllUserFields/cvAllUserFieldsActions';

export const ModalListWindow = () => {
  const {
    pathname,
    state: { theme, labelText },
  } = useLocation();

  const path = pathname.split('/')[2];
  const store = useSelector(store => store?.cvData[path] || []);

  const fieldDispatch = useDispatch();

  const handleAddNewField = () => {
    fieldDispatch(addAdditionalField(path));
  };

  const handleRemoveNewField = id => {
    if (id > 1) {
      fieldDispatch(
        removeAdditionalField({
          path,
          id,
        })
      );
    }
  };

  const renderForm = () => {
    return store.map(({ id, fields }) => {
      return (
        <ModalForm
          key={id}
          id={id}
          theme={theme}
          labelText={labelText}
          path={path}
          onSubmit={event => fieldDispatch(setUserCard(event))}
          fieldsList={fields}
          handleAdditionalField={handleAddNewField}
          handleRemoveAdditionalField={handleRemoveNewField}
        />
      );
    });
  };

  return <ModalListWindowWrapper>{renderForm()}</ModalListWindowWrapper>;
};
