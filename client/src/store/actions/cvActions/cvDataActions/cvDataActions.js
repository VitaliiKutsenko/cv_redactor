import { SET_FIELDS, ADD_FIELDS, REMOVE_FIELDS, ADD_NEW_FIELD } from './cvDataActionTypes';

export const addCvData = payload => ({
  type: ADD_FIELDS,
  payload,
});

export const addAdditionalField = payload => ({
  type: ADD_NEW_FIELD,
  payload,
});
