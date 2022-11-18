import { put, takeEvery, call } from 'redux-saga/effects';
import { registration } from '../../../api/auth/registration';
import { REGISTRATION_SUBMIT_FIELDS } from './registrationActions/registrationActionTypes';

import {
  getRegistrationSuccessActions,
  getRegistrationErrorActions,
} from './registrationActions/registrationActions';

export function* registrationSaga({ payload }) {
  const { data } = yield call(registration, payload);

  try {
    yield put(getRegistrationSuccessActions({ ...data }));
  } catch (e) {
    yield put(getRegistrationErrorActions({ ...data }));
  }
}

export function* registrationWatcher() {
  yield takeEvery(REGISTRATION_SUBMIT_FIELDS, registrationSaga);
}
