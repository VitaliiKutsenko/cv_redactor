import { RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_DENIED } from './resetPasswordActionTypes';

export const setEmailResetAction = payload => ({
  type: RESET_PASSWORD,
  payload,
});

export const resetPasswordAction = payload => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

export const errorResetPasswordAction = payload => ({
  type: RESET_PASSWORD_DENIED,
  payload,
});
