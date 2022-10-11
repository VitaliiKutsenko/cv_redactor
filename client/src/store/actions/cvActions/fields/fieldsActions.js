import { GET_FIELDS, ADD_FIELDS, REMOVE_FIELDS } from './fieldsActionTypes';

export const getFieldsAction = payload => ({
  type: GET_FIELDS,
  payload,
});

export const addFieldsAction = (
  payload = {
    types: '',
    values: '',
  }
) => ({
  type: ADD_FIELDS,
  payload,
});

export const removeFieldsAction = payload => ({
  type: REMOVE_FIELDS,
  payload,
});
