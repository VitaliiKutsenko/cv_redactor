import { put, takeEvery, call } from 'redux-saga/effects';
import { getApiCvDataSuccess, getApiCvDataError } from './apiCvDataActions';
import { GET_CV_DATA } from './apiCvDataActionTypes';
import { cvUserCards } from '../../../api/cv/cvUserCards';

export function* cvDataWatcher() {
  yield takeEvery(GET_CV_DATA, cvDataSaga);
}

export function* cvDataSaga({ payload }) {
  const { data, hasError } = yield call(cvUserCards, payload);

  try {
    yield put(getApiCvDataSuccess({ ...data }));
  } catch (hasError) {
    yield put(getApiCvDataError({ ...data }));
  }
}
