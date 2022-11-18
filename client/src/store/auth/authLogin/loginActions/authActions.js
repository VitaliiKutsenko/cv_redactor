import { AUTH_SUCCESS, AUTH_DENIED, AUTH_SUBMIT_FIELDS } from './authActionTypes';

export const setUser = payload => ({
  type: AUTH_SUBMIT_FIELDS,
  payload,
});

export const getAuthSuccessAction = payload => ({
  type: AUTH_SUCCESS,
  payload,
});

export const getAuthErrorAction = payload => ({
  type: AUTH_DENIED,
  payload,
});
