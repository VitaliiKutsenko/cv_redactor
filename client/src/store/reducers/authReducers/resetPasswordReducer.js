import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_DENIED,
} from '../../actions/authActions/resetPassword/resetPasswordActionTypes';

const initialState = {
  resetPassword: null,
  success: null,
  error: null,
};

export const resetPassword = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_PASSWORD:
      return {
        error: null,
        success: null,
        resetPassword: {
          ...state.resetPassword,
          ...payload.data,
        },
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        error: null,
        success: true,
        resetPassword: {
          ...state.resetPassword,
          ...payload.data,
        },
      };

    case RESET_PASSWORD_DENIED:
      return {
        resetPassword: null,
        success: false,
        error: {
          ...state.error,
          ...payload,
        },
      };

    default:
      return state;
  }
};
