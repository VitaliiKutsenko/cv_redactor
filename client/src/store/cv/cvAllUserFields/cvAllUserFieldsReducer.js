import {
  ALL_USER_FIELDS,
  ALL_USER_FIELDS_ERROR,
  ALL_USER_FIELDS_SUCCESS,
} from './cvAllUserFieldsActionTypes';

const initialState = {};

export const cvAllUserFields = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_USER_FIELDS: {
      return { ...state };
    }

    case ALL_USER_FIELDS_SUCCESS:
      return {
        ...payload,
        success: true,
      };

    case ALL_USER_FIELDS_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
