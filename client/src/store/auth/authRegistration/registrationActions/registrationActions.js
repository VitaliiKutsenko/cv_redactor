import { REGISTRATION_SUCCESS, REGISTRATION_ERROR, REGISTRATION_SUBMIT_FIELDS } from './registrationActionTypes';

export const setRegistrationDataActions = payload => ({
  type: REGISTRATION_SUBMIT_FIELDS,
  payload,
});

export const getRegistrationSuccessActions = payload => ({
  type: REGISTRATION_SUCCESS,
  payload,
});

export const getRegistrationErrorActions = payload => ({
  type: REGISTRATION_ERROR,
  payload,
});
