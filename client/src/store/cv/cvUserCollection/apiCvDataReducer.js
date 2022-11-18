import { GET_CV_DATA_ERROR, GET_CV_DATA_SUCCESS } from './apiCvDataActionTypes';

const initialState = {
  apiCvData: null,
  success: null,
  error: null,
};

export const apiUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CV_DATA_SUCCESS:
      return { ...state };

    case GET_CV_DATA_ERROR:
      return { ...state };

    default:
      return state;
  }
};
