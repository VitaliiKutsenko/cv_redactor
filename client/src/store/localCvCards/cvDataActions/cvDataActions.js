import { ADD_FIELDS, REMOVE_NEW_FIELD, ADD_NEW_FIELD } from './cvDataActionTypes';

export const addCvData = payload => ({
  type: ADD_FIELDS,
  payload,
});

export const addAdditionalField = payload => ({
  type: ADD_NEW_FIELD,
  payload,
});
export const removeAdditionalField = payload => ({
  type: REMOVE_NEW_FIELD,
  payload,
});
