import { put, takeEvery, call } from 'redux-saga/effects';

import { getAllUserFieldsSuccess, getAllUserFieldsError } from './cvAllUserFieldsActions';
import { cvAllUserFields } from '../../../api/cv/cvAllUserFields';
import { ALL_USER_FIELDS } from './cvAllUserFieldsActionTypes';

export function* cvAllUserFieldsWatcher() {
  yield takeEvery(ALL_USER_FIELDS, cvAllUserFieldsSaga);
}

export function* cvAllUserFieldsSaga({ payload }) {
  const { data } = yield call(cvAllUserFields, payload);

  console.log(data);
  try {
    yield put(getAllUserFieldsSuccess({ ...data.data }));
  } catch (hasError) {
    yield put(getAllUserFieldsError({ ...data }));
  }
}
