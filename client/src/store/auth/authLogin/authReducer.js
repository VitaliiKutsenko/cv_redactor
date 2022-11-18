import { AUTH_SUCCESS, AUTH_DENIED } from './loginActions/authActionTypes';

const initialState = {
  auth: null,
  success: null,
  error: null,
};

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_SUCCESS:
      return {
        error: null,
        success: true,
        auth: {
          ...state.auth,
          ...payload,
        },
      };

    case AUTH_DENIED:
      return {
        auth: null,
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
