import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from '../../actions/authActions/registration/registrationActionTypes';

const initialState = {
  registration: null,
  success: null,
  error: null,
};

export const registration = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTRATION_SUCCESS:
      return {
        error: null,
        success: true,
        registration: {
          ...state.auth,
          ...payload,
        },
      };

    case REGISTRATION_ERROR:
      return {
        registration: null,
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
