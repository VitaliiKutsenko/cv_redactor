import { SET_FIELDS, ADD_FIELDS, REMOVE_FIELDS } from './cvDataActionTypes';

export const setCvData = payload => ({
  type: SET_FIELDS,
  payload,
});

export const addCvData = (
  payload = {
    path: '',
    inputField: '',
  }
) => ({
  type: ADD_FIELDS,
  payload,
});

export const removeCvData = payload => ({
  type: REMOVE_FIELDS,
  payload,
});
