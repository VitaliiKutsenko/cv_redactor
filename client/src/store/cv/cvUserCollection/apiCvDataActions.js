import { GET_CV_DATA, GET_CV_DATA_ERROR, GET_CV_DATA_SUCCESS } from './apiCvDataActionTypes';

export const getApiCvData = payload => {
  return {
    type: GET_CV_DATA,
    payload,
  };
};

export const getApiCvDataSuccess = payload => ({
  type: GET_CV_DATA_SUCCESS,
  payload,
});
export const getApiCvDataError = payload => ({
  type: GET_CV_DATA_ERROR,
  payload,
});
