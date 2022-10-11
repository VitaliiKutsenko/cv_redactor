import { put, takeEvery, call } from 'redux-saga/effects';
import { auth } from '../../../api/auth';
import { AUTH_SUBMIT_FIELDS } from '../../actions/authActions/auth/authActionTypes';
import {
  getAuthErrorAction,
  getAuthSuccessAction,
} from '../../actions/authActions/auth/authActions';

export function* authSaga({ payload }) {
  const { data, hasError } = yield call(auth, payload);

  try {
    const token = data.accessToken;

    yield put(getAuthSuccessAction({ ...data }));

    localStorage.setItem('access_token', token);
  } catch (hasError) {
    yield put(getAuthErrorAction({ ...data }));
  }
}

export function* authWatcher() {
  yield takeEvery(AUTH_SUBMIT_FIELDS, authSaga);
}
