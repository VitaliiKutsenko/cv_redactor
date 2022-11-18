import {
  ALL_USER_FIELDS,
  ALL_USER_FIELDS_ERROR,
  ALL_USER_FIELDS_SUCCESS,
} from './cvAllUserFieldsActionTypes';

export const getAllUserFields = payload => {
  return {
    type: ALL_USER_FIELDS,
    payload,
  };
};

export const getAllUserFieldsSuccess = payload => ({
  type: ALL_USER_FIELDS_SUCCESS,
  payload,
});
export const getAllUserFieldsError = payload => ({
  type: ALL_USER_FIELDS_ERROR,
  payload,
});
